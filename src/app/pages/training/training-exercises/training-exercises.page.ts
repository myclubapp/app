import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
import { ModalController } from "@ionic/angular";
import { Observable, filter, map } from "rxjs";
import { ExerciseService } from "src/app/services/firebase/exercise.service";

@Component({
  selector: "app-training-exercises",
  templateUrl: "./training-exercises.page.html",
  styleUrls: ["./training-exercises.page.scss"],
})
export class TrainingExercisesPage implements OnInit {
  exercisesList$: Observable<any[]>;
  exercisesListBackup$: Observable<any[]>;
  skeleton = new Array(12);

  constructor(
    private cdr: ChangeDetectorRef,
    private exerciseService: ExerciseService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.exercisesList$ = this.getExercises("swissunihockey");
    this.exercisesListBackup$ = this.getExercises("swissunihockey");
  }
  handleSearch(event) {
    console.log(event.detail.value);

    this.exercisesList$ = this.exercisesListBackup$.pipe(
      map(items => {
       return items.filter(element => element.title.toLowerCase().includes(event.detail.value.toLowerCase()));
      })
    )  
  }


  getExercises(type: string) {
    return this.exerciseService.getExerciseRefs("swissunihockey");
  }

  openExercise(exercise){
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
