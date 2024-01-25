import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
import { ItemReorderEventDetail, ModalController, NavParams } from "@ionic/angular";
import { Observable, filter, first, map, pipe } from "rxjs";
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

  allowEdit: boolean = false;

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
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();

    /*this.teamTrainingExerciseList$.subscribe(data=>{
      console.log(data);
      //this.updateTeamTrainingExercise(data);
    });*/
  }
  handleSearch(event) {
    console.log(event.detail.value);

    this.exerciseListTemplate$ = this.exerciseListTemplateBackup$.pipe(
      map(items => {
        return items.filter(element => element.title.toLowerCase().includes(event.detail.value.toLowerCase()));
      })
    )
  }

  edit() {

    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }

  addExercise(exercise){
    this.exerciseService.addTeamTrainingExercise(this.training.teamId,this.training.id, exercise);
  }
  removeExercise(exercise){
    this.exerciseService.removeTeamTrainingExercise(this.training.teamId,this.training.id, exercise);
  }

  trackItems(index: number, itemNumber: number) {
    console.log("trackItems by " + index, itemNumber);
    return itemNumber;
  }


  updateTeamTrainingExercise(exerciseList){

    for (const exercise of exerciseList){
      console.log(exercise);
      this.exerciseService.updateTeamTrainingExerciseOrder(this.training.teamId,this.training.id, exercise.id, exercise.order)
    }

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
