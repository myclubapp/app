import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
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


  getExercises() {
    return this.exerciseService.getExerciseRefs();
  }

  openExercise(exercise){
    Browser.open({
      url: exercise.video
    })

  }


}
