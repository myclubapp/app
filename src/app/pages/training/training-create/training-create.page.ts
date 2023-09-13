import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { User } from "firebase/auth";
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
      
      date: new Date(),
      
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

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }
 
  async createTraining() {
    //Set Hours/Minutes of endDate to TimeFrom of training
    const calculatedDate = new Date(this.training.endDate);
    calculatedDate.setHours(new Date(this.training.timeFrom).getHours());
    calculatedDate.setMinutes(new Date(this.training.timeFrom).getMinutes());
    calculatedDate.setSeconds(0);
    calculatedDate.setMilliseconds(0);
    this.training.endDate = calculatedDate.toISOString();

    const calculatedStartDate = new Date(this.training.startDate);
    calculatedDate.setHours(new Date(this.training.timeFrom).getHours());
    calculatedDate.setMinutes(new Date(this.training.timeFrom).getMinutes());
    calculatedDate.setSeconds(0);
    calculatedDate.setMilliseconds(0);
    this.training.startDate = calculatedStartDate.toISOString();

    this.trainingService.setCreateTraining(this.training, this.user);
    return this.modalCtrl.dismiss({}, "confirm");
  }
}
