import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import { ExerciseService } from "src/app/services/firebase/exercise.service";

@Component({
  selector: "app-training-exercises",
  templateUrl: "./training-exercises.page.html",
  styleUrls: ["./training-exercises.page.scss"],
})
export class TrainingExercisesPage implements OnInit {
  exercisesList$: Observable<any[]>;
  skeleton = new Array(12);

  constructor(
    private cdr: ChangeDetectorRef,
    private exerciseService: ExerciseService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.exercisesList$ = this.getExercises("swissunihockey");
    this.exercisesList$.subscribe({
      next: () => {
        console.log("Training Data received");

        this.cdr.detectChanges();
      },
      error: (err) => console.error("Training Error in subscription:", err),
      complete: () => console.log("Training Observable completed"),
    });

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
