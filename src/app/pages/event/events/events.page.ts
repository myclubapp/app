import { Component, OnInit } from '@angular/core';
import { IonItemSliding, IonRouterOutlet, ModalController, ToastController } from '@ionic/angular';
import { User } from 'firebase/auth';
import { of,combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Event } from 'src/app/models/event';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ChampionshipService } from 'src/app/services/firebase/championship.service';
import { EventService } from 'src/app/services/firebase/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  user: User;

  eventsList: Event[];
  eventsListPast: Event[];
  constructor(
    public toastController: ToastController,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private authService: AuthService,
    private fbService: FirebaseService,
    private eventService: EventService,
  ) { }


  ngOnInit() {
    this.getUser();
    this.getEventsList();
    this.getEventsListPast();
  }

  async getUser(){
    this.user = await this.authService.getUser();
  }


  async toggle(status: boolean, event: Event){
    console.log(`Set Status ${status} for user ${this.user.uid} and team ${event.teamId} and event ${event.id}` );
    await this.eventService.setTeamEventAttendeeStatus(this.user.uid, status, event.teamId,  event.id);
    this.presentToast();
  }
  async toggleItem(slidingItem: IonItemSliding, status: boolean, event: Event){
    slidingItem.closeOpened();

    console.log(`Set Status ${status} for user ${this.user.uid} and team ${event.teamId} and event ${event.id}` );
    await this.eventService.setTeamEventAttendeeStatus(this.user.uid, status, event.teamId,  event.id);
    this.presentToast();
  }

  async presentToast() {
   
    const toast = await this.toastController.create({
      message: 'changes has been saved',
      color: "primary",
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

   getEventsList(){
    
    this.authService.getUser$().pipe(
      // GET TEAMS
      switchMap((user:User) => this.fbService.getTeamRefs(user)),
      // Loop Over Teams  
      switchMap((allTeams:any) => combineLatest(
        allTeams.map((team) => combineLatest(
          of(team),
          // Loop over Events
          // this.eventService.getTeamEventsRef(team.id), 
          this.eventService.getTeamEventsRef(team.id).pipe(
            switchMap((allEvents:any)=>combineLatest(
              allEvents.map((event)=> combineLatest(
                of(event),
                this.eventService.getTeamEventsAttendeesRef(team.id, event.id),
              ))
            )),
          ), 
          this.fbService.getTeam(team.id),  
        )),
      )),
      )
      .subscribe(async (data:any)=>{

        let eventsListNew = [];
        for (let team of data){ // loop over teams

          let events = team[1];
          let teamDetails = team[2];
          for (let eventObject of events){
            let event = eventObject[0];
            let attendees = eventObject[1];

            event.teamName = teamDetails.name; 
            event.teamId = teamDetails.id;
            event.attendees = attendees.filter(e=>e.status === true).length;

            if (attendees && attendees.filter(e=>e.id === this.user.uid).length === 1){
              event.status = attendees.filter(e=>e.id === this.user.uid)[0].status
            } else {
              event.status = null;
            }
            
            eventsListNew.push(event);
          }
        }
        this.eventsList = [...new Set([].concat(...eventsListNew))];
        this.eventsList = this.eventsList.sort((a,b)=>a.dateTime.toMillis()-b.dateTime.toMillis());
      });
  }
  
  getEventsListPast(){
    
    this.authService.getUser$().pipe(
      // GET TEAMS
      switchMap((user:User) => this.fbService.getTeamRefs(user)),
      // Loop Over Teams  
      switchMap((allTeams:any) => combineLatest(
        allTeams.map((team) => combineLatest(
          of(team),
          // Loop over Events
          // this.eventService.getTeamEventsRef(team.id), 
          this.eventService.getTeamEventsRefPast(team.id).pipe(
            switchMap((allEvents:any)=>combineLatest(
              allEvents.map((event)=> combineLatest(
                of(event),
                this.eventService.getTeamEventsAttendeesRef(team.id, event.id),
              ))
            )),
          ), 
          this.fbService.getTeam(team.id),  
        )),
      )),
      )
      .subscribe(async (data:any)=>{

        let eventsListNew = [];
        for (let team of data){ // loop over teams

          let events = team[1];
          let teamDetails = team[2];
          for (let eventObject of events){
            let event = eventObject[0];
            let attendees = eventObject[1];

            event.teamName = teamDetails.name; 
            event.teamId = teamDetails.id;
            event.attendees = attendees.filter(e=>e.status === true).length;

            if (attendees && attendees.filter(e=>e.id === this.user.uid).length === 1){
              event.status = attendees.filter(e=>e.id === this.user.uid)[0].status
            } else {
              event.status = null;
            }
            
            eventsListNew.push(event);
          }
        }
        this.eventsListPast = [...new Set([].concat(...eventsListNew))];
        this.eventsListPast = this.eventsListPast.sort((a,b)=>b.dateTime.toMillis()-a.dateTime.toMillis());
      });
  }
}
