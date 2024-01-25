import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
import { ModalController, NavParams } from "@ionic/angular";
import { Observable, filter, map } from "rxjs";
import { Training } from "src/app/models/training";
import { ExerciseService } from "src/app/services/firebase/exercise.service";

@Component({
  selector: "app-training-exercises",
  templateUrl: "./training-exercises.page.html",
  styleUrls: ["./training-exercises.page.scss"],
})
export class TrainingExercisesPage implements OnInit {
  @Input("training") training: Training;

  exerciseListTemplate$: Observable<any[]>;
  exerciseListTemplateBackup$: Observable<any[]>;

  teamExerciseList$: Observable<any[]>;
  teamTrainingExerciseList$: Observable<any[]>;

  skeleton = new Array(12);

  constructor(
    public navParams: NavParams,
    private exerciseService: ExerciseService,
    private modalCtrl: ModalController,
  ) {

  }

  ngOnInit() {
    this.training = this.navParams.get("training");

    this.exerciseListTemplate$ = this.getExercises("swissunihockey");
    this.exerciseListTemplateBackup$ = this.getExercises("swissunihockey");

    this.teamExerciseList$ = this.getTeamExercises(this.training.teamId);
    this.teamTrainingExerciseList$ = this.getTeamTrainingExercises(this.training.teamId, this.training.id);

  }
  ngOnDestroy(): void {
    /*if (this.trainingListPastBackupSub){
      this.trainingListPastBackupSub.unsubscribe();
    }
    if (this.trainingListBackupSub){
      this.trainingListBackupSub.unsubscribe();
    }

    // Unsubscribe to prevent memory leaks
    if (this.teamFilterSubscription) {
      this.teamFilterSubscription.unsubscribe();
    }*/
  }

  handleSearch(event) {
    console.log(event.detail.value);

    this.exerciseListTemplate$ = this.exerciseListTemplateBackup$.pipe(
      map(items => {
        return items.filter(element => element.title.toLowerCase().includes(event.detail.value.toLowerCase()));
      })
    )
  }


  getTeamTrainingExercises(teamId: string, trainingId: string) {
    return this.exerciseService.getTeamTrainingExerciseRefs(teamId, trainingId);
  }
  getTeamExercises(teamId: string) {
    return this.exerciseService.getTeamExerciseRefs(teamId);
  }
  getExercises(type: string = "swissunihockey") {
    return this.exerciseService.getExerciseRefs(type);
  }

  openExercise(exercise) {
    Browser.open({
      url: exercise.video
    })

  }
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }

}
