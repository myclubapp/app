import { Component, Input, OnInit } from "@angular/core";
import { Browser } from "@capacitor/browser";
import { AlertController, IonItemSliding, ItemReorderEventDetail, ModalController, NavParams, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject, Observable, Subject, catchError, debounceTime, filter, first, lastValueFrom, map, pipe, startWith, switchMap, take } from "rxjs";
import { Training } from "src/app/models/training";
import { ExerciseService } from "src/app/services/firebase/exercise.service";

@Component({
  selector: "app-team-exercises",
  templateUrl: "./team-exercises.page.html",
  styleUrls: ["./team-exercises.page.scss"],
})
export class TeamExercisesPage implements OnInit {
  @Input("training") training: Training;

  exerciseList$: Observable<any[]>;
  filteredExerciseList$: Observable<any[]>;
  teamExerciseList$: Observable<any[]>

  skeleton = new Array(12);
  searchTerm = new BehaviorSubject<string>('');  // Initialized with an empty string

  constructor(
    public navParams: NavParams,
    public toastCtrl: ToastController,

    private translate: TranslateService,
    private exerciseService: ExerciseService,
    private modalCtrl: ModalController,
  ) {

  }

  ngOnInit() {
    this.training = this.navParams.get("training");

    this.exerciseList$ = this.exerciseService.getExerciseRefs("swissunihockey").pipe(

    );

    this.filteredExerciseList$ = this.searchTerm.pipe(
      debounceTime(300),
      startWith(''),
      switchMap(term => this.filterExercises(term))
    );

    this.teamExerciseList$ = this.fetchTeamExercises();
  }
  ngOnDestroy(): void {

  }

  fetchTeamExercises() {
    return this.exerciseService.getTeamExerciseRefs(this.training.teamId).pipe(

    );
  }

  filterExercises(term: string) {
    return this.exerciseList$.pipe(
      map(items => items.filter(element =>
        element.title.toLowerCase().includes(term.toLowerCase()) ||
        element.description.toLowerCase().includes(term.toLowerCase())
      ))
    );
  }

  handleSearch(event: CustomEvent) {
    const searchTerm = event.detail.value || '';
    this.searchTerm.next(searchTerm);
  }

  displayError(err: any) {
    this.toastCtrl.create({
      header: this.translate.instant("common.error"),
      message: err.message || 'An error occurred',
      color: "danger",
      buttons: [{ text: this.translate.instant("common.ok"), role: "cancel" }],
    }).then(alert => alert.present());
  }


  async addExercise(slidingItem: IonItemSliding, exercise) {
    slidingItem.closeOpened();
    exercise["order"] = 0;
    try {
      await this.exerciseService.addTeamTrainingExercise(this.training.teamId, this.training.id, exercise)
      this.toastActionSaved();
    } catch (err) {

    }
  }
  async addTeamExercise(slidingItem: IonItemSliding, exercise) {
    slidingItem.closeOpened();
    exercise["order"] = 0;
    try {
      await this.exerciseService.addTeamExercise(this.training.teamId, exercise)
      this.toastActionSaved();
    } catch (err) {

    }

  }
  removeTeamExercise(slidingItem: IonItemSliding, exercise) {
    slidingItem.closeOpened();
    try {

      this.exerciseService.removeTeamExercise(this.training.teamId, exercise)
      this.toastActionCanceled();
    } catch (err) {

    }
  }

  openExercise(exercise) {
    Browser.open({
      url: exercise.link
    })
  }

  async toastActionSaved() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      duration: 1500,
      position: "top",
      color: "success",
    });

    await toast.present();
  }

  async toastActionCanceled() {
    const toast = await this.toastCtrl.create({
      message: await lastValueFrom(this.translate.get("team.action__canceled")),
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
function of(arg0: undefined[]): any {
  throw new Error("Function not implemented.");
}

