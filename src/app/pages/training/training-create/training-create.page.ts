import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { Observable, Subscription, catchError, concatMap, defaultIfEmpty, finalize, forkJoin, from, map, of, switchMap, take, tap } from "rxjs";
import { Team } from "src/app/models/team";
import { Training } from "src/app/models/training";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { TrainingService } from "src/app/services/firebase/training.service";

@Component({
  selector: "app-training-create",
  templateUrl: "./training-create.page.html",
  styleUrls: ["./training-create.page.scss"],
})
export class TrainingCreatePage implements OnInit {
  training: Training;
  user$: Observable<User>;
  user: User;
  private subscription: Subscription;
  teamList: Team[] = [];
 
  constructor(
    private readonly modalCtrl: ModalController,
    private trainingService: TrainingService,
    private readonly authService: AuthService,
    private fbService: FirebaseService,
    public navParams: NavParams
  ) {
    this.training = {
      id: "",
      name: "",
      description: "",

      streetAndNumber: "",
      postalCode: "",
      city: "",
      
      date: Timestamp.fromDate(new Date()),
      
      timeFrom: new Date().toISOString(),
      timeTo: new Date().toISOString(),
      
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),

      repeatFrequency: "W",
      repeatAmount: "1",
      
      teamId: "",
      teamName: "",
      liga: "",
      
      status: true,
      attendees: [],
      countAttendees: 0,
    };
  }

  ngOnInit() {

    let  teamsList: any[] = [];
    const teams$ = this.authService.getUser$().pipe(
      take(1),
      tap(user=>this.user = user),
      switchMap(user => this.fbService.getAdminTeamRefs(user).pipe(take(1))),
      concatMap(teamsArray =>  from(teamsArray)),
      tap((team:Team)=>console.log(team.id)),
      concatMap(team => 
        this.fbService.getTeamRef(team.id).pipe(
          take(1),
          defaultIfEmpty({}),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
          map(result => [result]),
          catchError(error => {
            console.error('Error fetching TeamDetail:', error);
            return of([]);
          })
        )
      ),
      tap(teamList => teamList.forEach(team => teamsList.push(team))),
      finalize(() => console.log("Get Teams completed"))
    );

    this.subscription = forkJoin([teams$]).subscribe({
      next: () => {
        // console.log(">>>" + teamsList);
        this.teamList = teamsList;
        this.training.teamId = this.teamList[0].id;
      },
      error: err => console.error('Error in the observable chain:', err)
    });

    }
    
  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
    
  }

  changeTimeFrom(ev){
    console.log(ev.detail.value)
    if (this.training.timeFrom > this.training.timeTo) {
      this.training.timeTo = this.training.timeFrom;
    }

  }

  changeStartDate(ev){
    console.log(ev.detail.value)
    if (this.training.startDate > this.training.endDate) {
      this.training.endDate = this.training.startDate;
    }
  }

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }
 
  async createTraining() {
    //Set Hours/Minutes of endDate to TimeFrom of training
    console.log(`Start Date before calculation: ${this.training.startDate}`);
    const calculatedStartDate = new Date(this.training.startDate);
    calculatedStartDate.setHours(new Date(this.training.timeFrom).getHours());
    calculatedStartDate.setMinutes(new Date(this.training.timeFrom).getMinutes());
    calculatedStartDate.setSeconds(0);
    calculatedStartDate.setMilliseconds(0);
    this.training.startDate = calculatedStartDate.toISOString();
    console.log(`Start Date after calculation: ${this.training.startDate}`);

    console.log(`End Date before calculation: ${this.training.endDate}`);
    const calcualtedEndDate = new Date(this.training.endDate);
    calcualtedEndDate.setHours(new Date(this.training.timeFrom).getHours());
    calcualtedEndDate.setMinutes(new Date(this.training.timeFrom).getMinutes());
    calcualtedEndDate.setSeconds(0);
    calcualtedEndDate.setMilliseconds(0);
    this.training.endDate = calcualtedEndDate.toISOString();
    console.log(`End Date after calculation: ${this.training.endDate}`);

    const calculatedTimeFrom = new Date(this.training.timeFrom);
    calculatedTimeFrom.setDate(new Date(this.training.startDate).getDate());
    calculatedTimeFrom.setMonth(new Date(this.training.startDate).getMonth());
    calculatedTimeFrom.setFullYear(new Date(this.training.startDate).getFullYear());
    calculatedTimeFrom.setSeconds(0);
    calculatedTimeFrom.setMilliseconds(0);
    this.training.timeFrom = calculatedTimeFrom.toISOString();

    const calculatedTimeTo = new Date(this.training.timeTo);
    calculatedTimeTo.setDate(new Date(this.training.startDate).getDate());
    calculatedTimeTo.setMonth(new Date(this.training.startDate).getMonth());
    calculatedTimeTo.setFullYear(new Date(this.training.startDate).getFullYear());
    calculatedTimeTo.setSeconds(0);
    calculatedTimeTo.setMilliseconds(0);
    this.training.timeTo = calculatedTimeTo.toISOString();

    delete this.training.attendees;

    this.trainingService.setCreateTraining(this.training, this.user);
    return this.modalCtrl.dismiss({}, "confirm");
  }
}
