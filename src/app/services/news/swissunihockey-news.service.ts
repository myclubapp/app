import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireFunctions} from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class SwissunihockeyNewsService {
  data: any;
  constructor(public http: HttpClient, private fns: AngularFireFunctions) {}

  getNews() {
    //const callable = this.fns.httpsCallable('swissunihockey/news');
    //return callable({});

    return this.http.get('https://europe-west6-myclubmanagement.cloudfunctions.net/swissunihockey/news');
  }
}
