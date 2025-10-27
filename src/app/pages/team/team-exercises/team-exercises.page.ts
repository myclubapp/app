import { Component, Input, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
import {
  AlertController,
  IonItemSliding,
  ItemReorderEventDetail,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  debounceTime,
  defaultIfEmpty,
  filter,
  first,
  lastValueFrom,
  map,
  of,
  pipe,
  startWith,
  switchMap,
  take,
} from "rxjs";
import { Training } from "src/app/models/training";
import { FirebaseService } from "src/app/services/firebase.service";
import { ExerciseService } from "src/app/services/firebase/exercise.service";

@Component({
  selector: "app-team-exercises",
  templateUrl: "./team-exercises.page.html",
  styleUrls: ["./team-exercises.page.scss"],
  standalone: false,
})
export class TeamExercisesPage implements OnInit {
  @Input() training!: any;

  exerciseList$: Observable<any[]>;
  filteredExerciseList$: Observable<any[]>;

  teamExerciseList$: Observable<any[]>;

  skeleton = new Array(12);
  searchTerm = new BehaviorSubject<string>(""); // Initialized with an empty string

  constructor(
    public toastCtrl: ToastController,
    private readonly fbService: FirebaseService,
    private translate: TranslateService,
    private exerciseService: ExerciseService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    // NavParams migration: now using @Input property directly
    console.log(">>>", this.training);

    this.exerciseList$ = this.fbService.getTeamRef(this.training.teamId).pipe(
      take(1), // Take only the first emission to prevent multiple subscriptions
      switchMap((team) => {
        if (!team || !team.type) {
          console.error("Team data is incomplete or missing.");
          return of([]); // Return an empty observable array if no type is found
        }
        if (team.type === "Club") {
          // Wenn Team-Typ 'Club' ist, hole den Typ vom Club
          return this.fbService.getClubRef(this.training.clubId).pipe(
            take(1),
            switchMap((club) => {
              if (!club || !club.type) {
                console.error("Club data is incomplete or missing.");
                return of([]);
              }
              return this.exerciseService.getExerciseRefs(club.type);
            }),
          );
        }

        // Ansonsten verwende den Team-Typ
        return this.exerciseService.getExerciseRefs(team.type);
      }),
      catchError((err) => {
        console.error("Error fetching exercises:", err);
        return [];
        // return of([]);  // Handle errors by returning an empty array
      }),
    );

    // this.exerciseList$ = this.exerciseService.getExerciseRefs("swissunihockey")

    this.filteredExerciseList$ = this.searchTerm.pipe(
      debounceTime(300),
      startWith(""),
      switchMap((term) => this.filterExercises(term)),
    );

    this.teamExerciseList$ = this.fetchTeamExercises() as Observable<any[]>;
  }
  ngOnDestroy(): void {}

  fetchTeamExercises() {
    return this.exerciseService.getTeamExerciseRefs(this.training.teamId).pipe(
      map((exercises) => exercises || []), // Safeguard to ensure it always maps to an array
      catchError((err) => {
        console.error("Error fetching team exercises:", err);
        this.toastActionError(err);
        return of([]); // Return an empty array on error
      }),
      startWith([]), // Immediately start with an empty array to ensure an emission
    );
  }

  filterExercises(term: string) {
    return this.exerciseList$.pipe(
      map((items) =>
        items.filter(
          (element) =>
            element.title.toLowerCase().includes(term.toLowerCase()) ||
            element.description.toLowerCase().includes(term.toLowerCase()),
        ),
      ),
    );
  }

  handleSearch(event: CustomEvent) {
    const searchTerm = event.detail.value || "";
    this.searchTerm.next(searchTerm);
  }

  displayError(err: any) {
    this.toastCtrl
      .create({
        header: this.translate.instant("common.error"),
        message: err.message || "An error occurred",
        color: "danger",
        buttons: [
          { text: this.translate.instant("common.ok"), role: "cancel" },
        ],
      })
      .then((alert) => alert.present());
  }

  async addExercise(slidingItem: IonItemSliding, exercise) {
    slidingItem.closeOpened();
    exercise["order"] = 0;
    try {
      await this.exerciseService.addTeamTrainingExercise(
        this.training.teamId,
        this.training.id,
        exercise,
      );
      this.toastActionSaved();
    } catch (err) {
      console.log(err);
    }
  }
  async addTeamExercise(slidingItem: IonItemSliding, exercise) {
    slidingItem.closeOpened();
    exercise["order"] = 0;
    try {
      await this.exerciseService.addTeamExercise(
        this.training.teamId,
        exercise,
      );
      this.toastActionSaved();
    } catch (err) {
      console.log(err);
    }
  }
  removeTeamExercise(slidingItem: IonItemSliding, exercise) {
    slidingItem.closeOpened();
    try {
      this.exerciseService.removeTeamExercise(this.training.teamId, exercise);
      this.toastActionCanceled();
    } catch (err) {
      console.log(err);
    }
  }

  openExercise(exercise) {
    Browser.open({
      url: exercise.link,
    });
  }

  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(
        this.translate.get("common.success__exercise_added"),
      ),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }

  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(
        this.translate.get("common.success__exercise_deleted"),
      ),
      duration: 1500,
      position: "top",
      color: "danger",
    });
    await toast.present();
  }

  async toastActionError(error) {
    const toast = await this.toastCtrl.create({
      message: error.message,
      duration: 1500,
      position: "top",
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
