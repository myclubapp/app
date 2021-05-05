import {ProfileService} from './../user/profile.service';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {AuthService} from './../../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class ChampionshipService {
  constructor(public authService: AuthService, private profileService: ProfileService) {}

  getTeamChampionshipList(teamId: string) {
    //Where Bedingung ausgeklammert.
    return firebase.default.firestore().collection('team').doc(teamId).collection('championshipList'); //.where("date", ">=", new Date(Date.now() - ( 365 * 24 * 60 * 60 * 1000)));
  }

  async acceptGame(game) {
    const user: firebase.default.User = await this.authService.getUser();
    let gameRef = firebase.default
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
    const user: firebase.default.User = await this.authService.getUser();
    let gameRef = firebase.default
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

  async getGameStatus(teamId: String, gameId: String): Promise<firebase.default.firestore.DocumentSnapshot> {
    // console.log(teamId + "/" + gameId);
    const user: firebase.default.User = await this.authService.getUser();
    return firebase.default
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
    let acceptList = [];
    let statusList = firebase.default
      .firestore()
      .collection('team')
      .doc(String(game.teamId))
      .collection('championshipList')
      .doc(`${game.id}`)
      .collection('memberList')
      .where('status', '==', true);
    let list = await statusList.get();
    //console.log(list);
    for (let element of list.docs) {
      //console.log(element.data());
      let user = await this.profileService.getUserProfileById(element.id);

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
    let rejectList = [];
    let statusList = firebase.default
      .firestore()
      .collection('team')
      .doc(String(game.teamId))
      .collection('championshipList')
      .doc(`${game.id}`)
      .collection('memberList')
      .where('status', '==', false);
    let list = await statusList.get();
    //console.log(list);
    for (let element of list.docs) {
      let user = await this.profileService.getUserProfileById(element.id);

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
