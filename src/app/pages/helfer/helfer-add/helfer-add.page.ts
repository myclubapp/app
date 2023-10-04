import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { User } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { Observable, Subscription, catchError, concatMap, defaultIfEmpty, finalize, forkJoin, from, map, of, switchMap, take, tap } from "rxjs";
import { Club } from 'src/app/models/club';
import { HelferEvent } from 'src/app/models/event';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EventService } from 'src/app/services/firebase/event.service';

@Component({
  selector: 'app-helfer-add',
  templateUrl: './helfer-add.page.html',
  styleUrls: ['./helfer-add.page.scss'],
})
export class HelferAddPage implements OnInit {
  event: HelferEvent;
  user: User;
  private subscription: Subscription;
  clubList: Club[] = [];
  constructor(    private readonly modalCtrl: ModalController,
    private eventService: EventService,
    private readonly authService: AuthService,
    private fbService: FirebaseService,
    public navParams: NavParams) {

    this.event = {
      id: "",
      name: "",
      description: "",

      location: "",
      streetAndNumber: "",
      postalCode: "",
      city: "",
      
      date: Timestamp.fromDate(new Date()),

      timeFrom: new Date().toISOString(),
      timeTo: new Date().toISOString(),
      
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),

      /*teamId: "",
      teamName: "",
      liga: "",*/

      clubId: "",
      clubName: "",

      schichten: [{
        name: "",
      }],
      
      status: true,
      attendees: [],
      countAttendees: 0,
    };
  }

  ngOnInit () {
    

    let  clubList: any[] = [];
    const clubs$ = this.authService.getUser$().pipe(
      take(1),
      tap(user=>this.user = user),
      switchMap(user => this.fbService.getUserClubAdminRefs(user).pipe(take(1))),
      concatMap(clubsArray =>  from(clubsArray)),
      tap((club:Club)=>console.log(club.id)),
      concatMap(club => 
        this.fbService.getClubRef(club.id).pipe(
          take(1),
          defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
          map(result => [result]),
          catchError(error => {
            console.error('Error fetching ClubDetail:', error);
            return of([]);
          })
        )
      ),
      tap(clubs => {
        console.log(clubs);
        clubs.forEach(club => clubList.push(club))
      }),
      finalize(() => {
        // clubList.push({"name": "Kein Club", "id": "undefined"})
        console.log("Get Club completed")
      })
    );

    this.subscription = forkJoin([clubs$]).subscribe({
      next: () => {
        console.log(">>>" + JSON.stringify(clubList));
        this.clubList = clubList;
        this.event.clubId = this.clubList[0].id;
        this.event.clubName = this.clubList[0].name;
      },
      error: err => console.error('Error in the observable chain:', err)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
    
  }

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }


  async createEvent() {
    //Set Hours/Minutes of endDate to TimeFrom of training
    console.log(`Start Date before calculation: ${this.event.startDate}`);
    const calculatedStartDate = new Date(this.event.startDate);
    calculatedStartDate.setHours(new Date(this.event.timeFrom).getHours());
    calculatedStartDate.setMinutes(new Date(this.event.timeFrom).getMinutes());
    calculatedStartDate.setSeconds(0);
    calculatedStartDate.setMilliseconds(0);
    this.event.startDate = calculatedStartDate.toISOString();
    console.log(`Start Date after calculation: ${this.event.startDate}`);

    console.log(`End Date before calculation: ${this.event.endDate}`);
    const calcualtedEndDate = new Date(this.event.endDate);
    calcualtedEndDate.setHours(new Date(this.event.timeFrom).getHours());
    calcualtedEndDate.setMinutes(new Date(this.event.timeFrom).getMinutes());
    calcualtedEndDate.setSeconds(0);
    calcualtedEndDate.setMilliseconds(0);
    this.event.endDate = calcualtedEndDate.toISOString();
    console.log(`End Date after calculation: ${this.event.endDate}`);

    const calculatedTimeFrom = new Date(this.event.timeFrom);
    calculatedTimeFrom.setDate(new Date(this.event.startDate).getDate());
    calculatedTimeFrom.setMonth(new Date(this.event.startDate).getMonth());
    calculatedTimeFrom.setFullYear(new Date(this.event.startDate).getFullYear());
    calculatedTimeFrom.setSeconds(0);
    calculatedTimeFrom.setMilliseconds(0);
    this.event.timeFrom = calculatedTimeFrom.toISOString();

    const calculatedTimeTo = new Date(this.event.timeTo);
    calculatedTimeTo.setDate(new Date(this.event.startDate).getDate());
    calculatedTimeTo.setMonth(new Date(this.event.startDate).getMonth());
    calculatedTimeTo.setFullYear(new Date(this.event.startDate).getFullYear());
    calculatedTimeTo.setSeconds(0);
    calculatedTimeTo.setMilliseconds(0);
    this.event.timeTo = calculatedTimeTo.toISOString();

    delete this.event.attendees;

    this.eventService.setCreateHelferEvent(this.event, this.user);
    return this.modalCtrl.dismiss({}, "confirm");
  }
 
  changeTimeFrom(ev){
    console.log(ev.detail.value)
    if (this.event.timeFrom > this.event.timeTo) {
      this.event.timeTo = this.event.timeFrom;
    }

  }

  changeStartDate(ev){
    console.log(ev.detail.value)
    if (this.event.startDate > this.event.endDate) {
      this.event.endDate = this.event.startDate;
    }
  }
}
