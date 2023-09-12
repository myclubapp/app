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
      timeFrom: new Date().toISOString(),
      timeTo: new Date().toISOString(),

      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      date: new Date(),
      teamId: "",
      teamName: "",
      liga: "",
      status: true,
      attendees: [],
    };
  }

  ngOnInit() {

    let  teamList: any[] = [];
    const teams$ = this.authService.getUser$().pipe(
      take(1),
      tap(user=>this.user = user),
      switchMap(user => this.fbService.getUserTeamRefs(user).pipe(take(1))),
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
      tap(teamList => teamList.forEach(team => teamList.push(team))),
      finalize(() => console.log("Get Teams completed"))
    );

    this.subscription = forkJoin([teams$]).subscribe({
      next: () => {
        console.log(teamList);
        this.teamList = teamList;
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
    this.trainingService.setCreateTraining(this.training, this.user);
    return this.modalCtrl.dismiss({}, "confirm");
  }
}
