import {ProfileService} from './../user/profile.service';
import {Time} from '@angular/common';
import {TeamService} from './../club/team.service';
import {AuthService} from './../../services/auth.service';
import {Injectable} from '@angular/core';
import firebase from 'firebase';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  public trainingListRef: firebase.firestore.CollectionReference;
  constructor(public authService: AuthService, private profileService: ProfileService) {}
  async createTraining(
    title: string,
    description: string,
    location: string,
    timeFrom: Time,
    timeTo: Time,
    weekday: [],
    startDate: Date,
    repeat: number,
    clubId: string,
    teamId: string
  ): Promise<firebase.firestore.DocumentReference> {
    const user: firebase.User = await this.authService.getUser();
    this.trainingListRef = firebase.firestore().collection(`userProfile/${user.uid}/trainingList`);
    return this.trainingListRef.add({
      title: title,
      description: description,
      location: location,
      timeFrom: timeFrom,
      timeTo: timeTo,
      weekday: weekday,
      startDate: startDate,
      repeat: repeat,
      clubId: clubId,
      teamId: teamId,
    });
  }

  getTeamTraining(teamId: string) {
    return firebase
      .firestore()
      .collection('team')
      .doc(teamId)
      .collection('trainingList')
      .where('date', '>=', new Date(Date.now() - 1 * 24 * 60 * 60 * 1000))
      .orderBy('date', 'asc')
      .limit(20);
  }
  getTeamTrainingLimit(teamId: string) {
    return firebase
      .firestore()
      .collection('team')
      .doc(teamId)
      .collection('trainingList')
      .where('date', '>=', new Date(Date.now() - 1 * 24 * 60 * 60 * 1000))
      .orderBy('date', 'asc')
      .limit(3);
  }
  getPastTeamTraining(teamId: string) {
    return firebase
      .firestore()
      .collection('team')
      .doc(teamId)
      .collection('trainingList')
      .where('date', '>=', new Date(Date.now() - 20 * 24 * 60 * 60 * 1000))
      .orderBy('date', 'desc')
      .where('date', '<=', new Date(Date.now()))
      .limit(20);
  }
  async acceptTraining(training) {
    const user: firebase.User = await this.authService.getUser();
    return firebase
      .firestore()
      .collection(`team`)
      .doc(`${training.teamId}`)
      .collection(`trainingList`)
      .doc(`${training.id}`)
      .collection('memberList')
      .doc(`${user.uid}`)
      .set(
        {
          status: true,
        },
        {merge: true}
      );
  }

  async rejectTraining(training) {
    const user: firebase.User = await this.authService.getUser();
    return firebase
      .firestore()
      .collection(`team`)
      .doc(`${training.teamId}`)
      .collection(`trainingList`)
      .doc(`${training.id}`)
      .collection('memberList')
      .doc(`${user.uid}`)
      .set(
        {
          status: false,
        },
        {merge: true}
      );
  }

  async getTrainingStatus(training): Promise<firebase.firestore.DocumentSnapshot> {
    const user: firebase.User = await this.authService.getUser();
    return firebase
      .firestore()
      .collection(`team`)
      .doc(`${training.data().teamId}`)
      .collection(`trainingList`)
      .doc(`${training.id}`)
      .collection('memberList')
      .doc(`${user.uid}`)
      .get();
  }

  async getAcceptList(training): Promise<any> {
    let acceptList = [];
    let statusList = firebase
      .firestore()
      .collection(`team`)
      .doc(`${training.teamId}`)
      .collection(`trainingList`)
      .doc(`${training.id}`)
      .collection('memberList')
      .where('status', '==', true);

    let list = await statusList.get();

    for (let element of list.docs) {
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

  async getRejectList(training): Promise<any> {
    let rejectList = [];

    let statusList = firebase
      .firestore()
      .collection(`team`)
      .doc(`${training.teamId}`)
      .collection(`trainingList`)
      .doc(`${training.id}`)
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

  async deleteTraining(training) {
    //const user: firebase.User = await this.authService.getUser();
    return firebase.firestore().collection(`team`).doc(`${training.teamId}`).collection(`trainingList`).doc(`${training.id}`).delete();
  }

  async changeTraining(training) {
    //const user: firebase.User = await this.authService.getUser();
    console.log(training);
    return firebase.firestore().collection(`team`).doc(`${training.teamId}`).collection(`trainingList`).doc(`${training.id}`).set(
      training,
      /* 
      {
     title : training.title,
      description: training.description,
      location: training.location,
      timeFrom: training.timeFrom,
      timeTo: training.timeTo
    }
      */
      {merge: true}
    );
  }
}
