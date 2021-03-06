import {Injectable} from '@angular/core';
import {AuthService} from './../../services/auth.service';
import firebase from 'firebase';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  public teamListRef: firebase.firestore.CollectionReference;

  public requestListRef: firebase.firestore.CollectionReference;
  constructor(public authService: AuthService) {}

  approve(requestId) {
    return firebase.firestore().collection('requests').doc(requestId).set(
      {
        status: true,
      },
      {
        merge: true,
      }
    );
  }
  reject(requestId) {
    return firebase.firestore().collection('requests').doc(requestId).set(
      {
        status: 'rejected',
      },
      {
        merge: true,
      }
    );
  }

  getClubRequestList(clubId) {
    return firebase.firestore().collection('club').doc(clubId).collection('requestList');
  }

  getTeamRequestList(teamId) {
    return firebase.firestore().collection('team').doc(teamId).collection('requestList');
  }

  async getUserRequestList() {
    const user: firebase.User = await this.authService.getUser();
    return firebase
      .firestore()
      .collection('requests')
      .where('userRef', '==', firebase.firestore().doc('userProfile/' + user.uid));
  }

  async addRequest(clubId, teamId): Promise<any> {
    const user: firebase.User = await this.authService.getUser();
    let userRef = firebase.firestore().collection(`userProfile`).doc(user.uid);
    let clubRef = firebase
      .firestore()
      .collection('club')
      .doc('su-' + clubId);
    let teamRef = firebase
      .firestore()
      .collection('team')
      .doc('su-' + teamId);

    return firebase.firestore().collection('requests').add({
      userRef: userRef,
      clubRef: clubRef,
      teamRef: teamRef,
    });
  }
  /*

    async getTeamRequestList1(): Promise < any > {
      let requestList = [];
      let teamList: Array < any > = await this.teamSerivice.getTeamList();
      // console.log(teamList);

      let requestPromise = [];
      for (let team of teamList) {
        //console.log("teamId: " + team.id);
        let requestListRef = firebase.firestore().collection("team")
          .doc(team.id).collection("requestList");
        requestPromise.push(requestListRef.get());
      }

      let data = await Promise.all(requestPromise);
      for (let requests of data) {
        if (!requests.empty) {

          for (let element of requests.docs) {
            let club = await element.data().clubRef.get();
            let team = await element.data().teamRef.get();
            let user = await element.data().userRef.get();

            requestList.push({
              ...{
                "id": element.id
              },
              ...{
                "user": user.data() || ""
              },
              ...{
                "club": club.data() || ""
              },
              ...{
                "team": team.data() || ""
              },
            });
          }
        } else {

        }
      }
      return requestList;
    };

    async getClubRequestList1(): Promise < any > {
      let requestList = [];

      let clubList: Array < any > = await this.teamSerivice.getClubList();
      // console.log(teamList);

      let requestPromise = [];
      for (let club of clubList) {
        //console.log("teamId: " + team.id);
        let requestListRef = firebase.firestore().collection("club")
          .doc(club.id).collection("requestList");
        requestPromise.push(requestListRef.get());
      }

      let data = await Promise.all(requestPromise);
      for (let requests of data) {
        if (!requests.empty) {

          for (let element of requests.docs) {
            let club = await element.data().clubRef.get();
            let team = await element.data().teamRef.get();
            let user = await element.data().userRef.get();

            requestList.push({
              ...{
                "id": element.id
              },
              ...{
                "user": user.data() || ""
              },
              ...{
                "club": club.data() || ""
              },
              ...{
                "team": team.data() || ""
              },
            });
          }
        } else {

        }
      }
      return requestList;

    }*/

  /* BACKUP 
            let club = await request.data().clubRef.get();
            let team = await request.data().teamRef.get();
            let user = await request.data().userRef.get();

            this.requestList.push({
              ...{
                "id": request.id
              },
              ...{
                "user": user.data() || ""
              },
              ...{
                "club": club.data() || ""
              },
              ...{
                "team": team.data() || ""
              },
            });

            */
}
