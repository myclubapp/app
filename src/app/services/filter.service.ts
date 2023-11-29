import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Preferences, GetResult} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private teamFilterSubject = new Subject<any>(); // Use 'any' or a more specific type for your filter
  private clubFilterSubject = new Subject<any>(); // Use 'any' or a more specific type for your filter

  // Observable stream that components can subscribe to
  teamFilter$ = this.teamFilterSubject.asObservable();
  clubFilter$ = this.clubFilterSubject.asObservable();
  constructor() { 

    console.log("INIT FILTER SERVICE");

    Preferences.get({ key: 'teamFilter' }).then((result:GetResult)=>{
      console.log("Read Team Filter Value from Storage: " + result.value );
      this.updateTeamFilter(result.value);
    });  

    Preferences.get({ key: 'clubFilter' }).then((result:GetResult)=>{
      console.log("Read Club Filter Value from Storage: " + result.value );
      this.updateClubFilter(result.value);
    });  

  }

  updateTeamFilter(value: any) {
    console.log("update filter " + value);
    this.teamFilterSubject.next(value);
    Preferences.set({
      key: 'teamFilter',
      value: value,
    });
  }

  updateClubFilter(value: any) {
    console.log("update filter " + value);
    this.clubFilterSubject.next(value);
    Preferences.set({
      key: 'clubFilter',
      value: value,
    });
  }


}
