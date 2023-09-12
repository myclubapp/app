import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { User } from "firebase/auth";
import { Observable, Subscription, take, tap } from "rxjs";
import { Training } from "src/app/models/training";
import { AuthService } from "src/app/services/auth.service";
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
  constructor(
    private readonly modalCtrl: ModalController,
    private trainingService: TrainingService,
    private readonly authService: AuthService,
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
    this.subscription = this.authService.getUser$().pipe(
      take(1),
      tap(user=>this.user = user)
    ).subscribe();
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
