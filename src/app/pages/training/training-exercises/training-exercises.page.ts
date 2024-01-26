import { Component, Input, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
import { ItemReorderEventDetail, ModalController, NavParams, ToastController } from "@ionic/angular";
import { Observable, filter, first, lastValueFrom, map, pipe, take } from "rxjs";
import { Training } from "src/app/models/training";
import { ExerciseService } from "src/app/services/firebase/exercise.service";
import { TeamExercisesPage } from "../../team/team-exercises/team-exercises.page";
import { TranslateService } from "@ngx-translate/core";

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
    public toastCtrl: ToastController,
    private translate: TranslateService,
  ) {

  }

  ngOnInit() {
    this.training = this.navParams.get("training");
    this.teamTrainingExerciseList$ = this.exerciseService.getTeamTrainingExerciseRefs(this.training.teamId, this.training.id);

  }
  ngOnDestroy(): void {
  
  }
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>, list) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    const newList = ev.detail.complete(list);

    let index = 0;
    for (const element of newList){
      this.exerciseService.updateTeamTrainingExerciseOrder(this.training.teamId,this.training.id, element.id, index);
    
      index++;
    }


  }
  handleSearch(event) {
    console.log(event.detail.value);

    this.exerciseListTemplate$ = this.exerciseListTemplateBackup$.pipe(
      take(1),
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

  removeExercise(exercise){
    this.exerciseService.removeTeamTrainingExercise(this.training.teamId,this.training.id, exercise);
    this.toastActionCanceled();
  }

  trackItems(index: number, itemNumber) {
    // console.log("trackItems by index " + index);
    // console.log("trackItems by itemnumber " + JSON.stringify(itemNumber));
    return itemNumber;
  }

  openExercise(exercise) {
    Browser.open({
      url: exercise.video
    })
  }

  async openTeamTrainingExercise(){
      const modal = await this.modalCtrl.create({
        component: TeamExercisesPage,
        presentingElement: await this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          training: this.training
        },
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      if (role === "confirm") {
      }
  
  }

  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "bottom",
      color: "success",
    });

    await toast.present();
  }

  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("team.action__canceled")),
      duration: 1500,
      position: "bottom",
      color: "danger",
    });
    await toast.present();
  }

  async toastActionError(error) {
    const toast = await this.toastCtrl.create({
      message: error.message,
      duration: 2000,
      position: "bottom",
      color: "danger",
    });

    await toast.present();
  }
  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(null, "confirm");
  }

}
