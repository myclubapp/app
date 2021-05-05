import {
  Injectable
} from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {
  AuthService
} from './../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public teamListRef: firebase.default.firestore.CollectionReference;
  public clubListRef: firebase.default.firestore.CollectionReference;

  constructor(
    public authService: AuthService
  ) {


  }

  getTeamListChanges(user) {
    return firebase.default
      .firestore()
      .collection(`userProfile/${user.uid}/teamList`);
  }


  getTeamMemberList(teamId) {
    return firebase.default.firestore().collection('team').doc(teamId).collection('memberList');
  }

  getTeamAdminList(teamId) {
    return firebase.default.firestore().collection('team').doc(teamId).collection('teamAdminList');
  }

  getClubMemberList(clubId) {
    return firebase.default.firestore().collection('club').doc(clubId).collection('memberList');
  }

  getClubAdminList(clubId) {
    return firebase.default.firestore().collection('club').doc(clubId).collection('clubAdminList');
  }


  getClubListChanges(user) {
    return firebase.default.firestore().collection('userProfile').doc(user.uid).collection('clubList');
  }

  async getTeamList(): Promise < any > {

    return new Promise(async (resolve, reject) => {

      let teamList = [];
      const user: firebase.default.User = await this.authService.getUser();
      let teamListRef = await firebase.default
        .firestore()
        .collection(`userProfile/${user.uid}/teamList`);

      teamListRef.onSnapshot(async snapshot => {
        let teams = snapshot.docChanges();
        for (let team of teams) {

          let teamData = await team.doc.data().teamRef.get();
          let clubRef = await teamData.data().clubRef.get();

          //console.log(teamData.data());

          teamList.push({
            ...teamData.data(),
            ...{
              "id": team.doc.id
            },
            ...{
              "club": clubRef.data()
            },
            ...{
              "clubName": clubRef.data().name
            }
          });
        }
        resolve(teamList);
      });
    });
  }


  async getClubList(): Promise < any > {
    let clubList = [];
    let promise = [];

    const user: firebase.default.User = await this.authService.getUser();

    let clubListSnapshot: firebase.default.firestore.QuerySnapshot = await firebase.default
      .firestore()
      .collection(`userProfile/${user.uid}/clubList`).get();

    clubListSnapshot.forEach(club => {
      promise.push(club.data().clubRef.get());
    });

    let data = await Promise.all(promise);

    for (let clubSnapshot of data) {
      clubList.push({
        ...clubSnapshot.data(),
        ...{
          "id": clubSnapshot.id
        }
      });
    }
    return clubList;
  }

  async getAllTeamsOfClub(clubId): Promise < any > {

  }

  async getClub(clubId) {
    const user: firebase.default.User = await this.authService.getUser();

    let clubRefSnapshot = await firebase.default
      .firestore()
      .collection(`userProfile/${user.uid}/clubList`).doc(clubId).get();

    let club = await clubRefSnapshot.data().clubRef.get();
    return club.data();
  }

  async getTeam(teamId) {

    const user: firebase.default.User = await this.authService.getUser();

    let teamRefSnapshot = await firebase.default
      .firestore()
      .collection(`userProfile/${user.uid}/teamList`).doc(teamId).get();

    let team = await teamRefSnapshot.data().teamRef.get();
    return team.data();
  }

  //SELBER CLUB/TEAM verlassen
  async leaveClub(clubId): Promise < any > {
    const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection(`userProfile`).doc(user.uid).collection('clubList').doc(clubId).delete();
  }

  async leaveTeam(teamId): Promise < any > {
    const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection(`userProfile`).doc(user.uid).collection('teamList').doc(teamId).delete();
  }

  //ADMIN FUNKTION!!!! TEAMADMIN UND CLUBADMIN VERLASSEN
  async removeAdminFromClub(clubId, userId): Promise < any > {
    //const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection(`userProfile`).doc(userId).collection('clubAdminList').doc(clubId).delete();
  }

  async removeAdminFromTeam(teamId, userId): Promise < any > {
    //const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection(`userProfile`).doc(userId).collection('teamAdminList').doc(teamId).delete();
  }

  //ADMIN FUNKTION !!!!! REMOVE MEMBER
  async removeMemberFromClub(clubId, userId): Promise < any > {
    //const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection(`userProfile`).doc(userId).collection('clubList').doc(clubId).delete();
  }

  async removeMemberFromTeam(teamId, userId): Promise < any > {
    //const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection(`userProfile`).doc(userId).collection('teamList').doc(teamId).delete();
  }

  //ADMIN FUNKTION!!!! Add TeamAdmin & ClubAdmin
  async addAdminToClub(clubId, userId): Promise < any > {
    const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection(`userProfile`).doc(userId).collection('clubAdminList').doc(clubId).set({
      "clubRef": firebase.default.firestore().collection('club').doc(clubId),
      "userRef": firebase.default.firestore().collection('userProfile').doc(user.uid) // für eigene Rule in Functions
    });
  }

  async addAdminToTeam(teamId, userId): Promise < any > {
    const user: firebase.default.User = await this.authService.getUser();
    return firebase.default.firestore().collection(`userProfile`).doc(userId).collection('teamAdminList').doc(teamId).set({
      "teamRef": firebase.default.firestore().collection('team').doc(teamId),
      "userRef": firebase.default.firestore().collection('userProfile').doc(user.uid) // für eigene Rule in Functions
    });
  }



  async checkIfClubHasNoMembers(clubId): Promise < any > {
    //console.log(clubId);
    firebase.default.firestore().collection("club").doc(clubId).collection("memberList").get().then(clubMemberList => {
      return clubMemberList.empty;
    }).catch(error => {
      console.log(error);
    });
  }

  async checkIfClubNotExists(clubId): Promise < any > {
    let club = await firebase.default.firestore().collection("club").doc(clubId).get();

    return !club.exists;

  }


  async saveClub(club) {
    const user: firebase.default.User = await this.authService.getUser();

    let clubRefSnapshot = await firebase.default
      .firestore()
      .collection(`userProfile/${user.uid}/clubList`).doc(club.id).get();

    return clubRefSnapshot.ref.set({
      wordpress: club.wordpress
    }, {
      merge: true
    })
  }

  async saveTeam(team) {
    const user: firebase.default.User = await this.authService.getUser();

    let teamRefSnapshot = await firebase.default
      .firestore()
      .collection(`userProfile/${user.uid}/teamList`).doc(team.id).get();

    return teamRefSnapshot.ref.set({
      //wordpress: team.wordpress
    }, {
      merge: true
    })
  }

}