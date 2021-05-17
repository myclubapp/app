import {ProfileService} from './../user/profile.service';
import {Injectable} from '@angular/core';
import firebase from 'firebase';
import 'firebase/firestore';
import {AuthService} from './../../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class ChampionshipService {
  constructor(public authService: AuthService, private profileService: ProfileService) {}

  getTeamChampionshipList(teamId: string) {
    //Where Bedingung ausgeklammert.
    return firebase.firestore().collection('team')
    .doc(teamId).collection('championshipList'); //.where("date", ">=", new Date(Date.now() - ( 365 * 24 * 60 * 60 * 1000)));
  }

  async acceptGame(game) {
    const user: firebase.User = await this.authService.getUser();
    await firebase
      .firestore()
      .collection('team')
      .doc(String(game.teamId))
      .collection('championshipList')
      .doc(`${String(game.id)}`)
      .collection('memberList')
      .doc(`${user.uid}`)
      .set({
        status: true,
      });
  }

  async rejectGame(game) {
    const user: firebase.User = await this.authService.getUser();
    await firebase
      .firestore()
      .collection('team')
      .doc(String(game.teamId))
      .collection('championshipList')
      .doc(`${String(game.id)}`)
      .collection('memberList')
      .doc(`${user.uid}`)
      .set({
        status: false,
      });
  }

  async getGameStatus(teamId: string, gameId: string): Promise<firebase.firestore.DocumentSnapshot> {
    // console.log(teamId + "/" + gameId);
    const user: firebase.User = await this.authService.getUser();
    return firebase
      .firestore()
      .collection('team')
      .doc(String(teamId))
      .collection('championshipList')
      .doc(`${String(gameId)}`)
      .collection('memberList')
      .doc(`${user.uid}`)
      .get();
  }

  async getAcceptList(game): Promise<any> {
    const acceptList = [];
    const statusList = await firebase
      .firestore()
      .collection('team')
      .doc(String(game.teamId))
      .collection('championshipList')
      .doc(`${game.id}`)
      .collection('memberList')
      .where('status', '==', true);
    const list = await statusList.get();
    //console.log(list);
    for (const element of list.docs) {
      //console.log(element.data());
      const user = await this.profileService.getUserProfileById(element.id);

      acceptList.push({
        ...element.data(),
        ...{
          id: element.id,
        },
        ...{
          user: user.data(),
        },
      });
    }
    return acceptList;
  }

  async getRejectList(game): Promise<any> {
    const rejectList = [];
    const statusList = firebase
      .firestore()
      .collection('team')
      .doc(String(game.teamId))
      .collection('championshipList')
      .doc(`${game.id}`)
      .collection('memberList')
      .where('status', '==', false);
    const list = await statusList.get();
    //console.log(list);
    for (const element of list.docs) {
      const user = await this.profileService.getUserProfileById(element.id);

      rejectList.push({
        ...element.data(),
        ...{
          id: element.id,
        },
        ...{
          user: user.data(),
        },
      });
    }
    return rejectList;
  }
}
