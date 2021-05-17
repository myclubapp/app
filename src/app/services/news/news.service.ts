import {AuthService} from './../auth.service';
import {ProfileService} from './../user/profile.service';
import {TeamService} from './../club/team.service';
import {Injectable} from '@angular/core';
import firebase from 'firebase';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  public newsListRef: firebase.firestore.CollectionReference;
  constructor(public authService: AuthService, private profileService: ProfileService, private teamSerivice: TeamService) {}
  async createNews(
    title: string,
    description: string,

    clubId: string,
    teamId: string
  ): Promise<firebase.firestore.DocumentReference> {
    const user: firebase.User = await this.authService.getUser();
    this.newsListRef = firebase.firestore().collection(`userProfile/${user.uid}/newsList`);
    return this.newsListRef.add({
      title: title,
      description: description,
      clubId: clubId,
      teamId: teamId,
    });
  }

  getTeamNews(teamId: string) {
    return firebase.firestore().collection('team').doc(teamId).collection('newsList').limit(20);
  }

  async deleteTeamNews(news) {
    return firebase.firestore().collection(`team`).doc(`${news.teamId}`).collection(`newsList`).doc(`${news.id}`).delete();
  }

  async changeTeamNews(news) {
    return firebase.firestore().collection(`team`).doc(`${news.teamId}`).collection(`newsList`).doc(`${news.id}`).set(news, {merge: true});
  }

  getClubNews(clubId: string) {
    return firebase.firestore().collection('club').doc(clubId).collection('newsList').limit(20);
  }

  async deleteClubNews(news) {
    return firebase.firestore().collection(`team`).doc(`${news.clubId}`).collection(`newsList`).doc(`${news.id}`).delete();
  }

  async changeClubNews(news) {
    return firebase.firestore().collection(`club`).doc(`${news.clubId}`).collection(`newsList`).doc(`${news.id}`).set(news, {merge: true});
  }
}
