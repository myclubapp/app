import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class UnihockeyService {
  data: any;
  constructor(public http: HttpClient,
    private fns: AngularFireFunctions) { }
 
    getSUGames(teamId, season): any {
    
      //const callable = this.fns.httpsCallable('swissunihockey/games/' + teamId + "/" + season);    
      //return callable({});
      return this.http.get('https://europe-west6-myclubmanagement.cloudfunctions.net/swissunihockey/games/' + teamId + "/" + season);
    }
  
    getSUGame(gameId): any {
      
      //const callable = this.fns.httpsCallable('swissunihockey/game/' + gameId);
      //return callable({});
      return this.http.get('https://europe-west6-myclubmanagement.cloudfunctions.net/swissunihockey/game/' + gameId);
    }

  getClubs() {
    
    //const callable = this.fns.httpsCallable('swissunihockey/clubs');    
    //return callable({});

    return this.http.get('https://europe-west6-myclubmanagement.cloudfunctions.net/swissunihockey/clubs');
  }
  getTeams(clubId, season){
    
    //const callable = this.fns.httpsCallable('swissunihockey/teams/' + clubId + '/' + season);    
    //return callable({});

    return this.http.get('https://europe-west6-myclubmanagement.cloudfunctions.net/swissunihockey/teams/' + clubId + '/' + season);
  }

  getSeasons(){
    
    //const callable = this.fns.httpsCallable('swissunihockey/season');    
    //return callable({});

    return this.http.get('https://europe-west6-myclubmanagement.cloudfunctions.net/swissunihockey/season');
  }

  getCurrentSeason(){
    //const callable = this.fns.httpsCallable('swissunihockey/currentSeason'); 
    //return callable({});
    
    return this.http.get('https://europe-west6-myclubmanagement.cloudfunctions.net/swissunihockey/currentSeason');
  }

}
