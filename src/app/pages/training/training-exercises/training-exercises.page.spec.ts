import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrainingExercisesPage } from "./training-exercises.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { ExerciseService } from "src/app/services/firebase/exercise.service";
import { ModalController, ToastController } from "@ionic/angular";

describe("TrainingExercisesPage", () => {
  let component: TrainingExercisesPage;
  let fixture: ComponentFixture<TrainingExercisesPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamAdminList",
      "isTeamAdmin",
    ]);
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));
    const exerciseServiceSpy = jasmine.createSpyObj("ExerciseService", [
      "getTeamTrainingExerciseRefs",
    ]);
    exerciseServiceSpy.getTeamTrainingExerciseRefs.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [TrainingExercisesPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FirebaseService, useValue: fbServiceSpy },
        { provide: ExerciseService, useValue: exerciseServiceSpy },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
          ]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingExercisesPage);
    component = fixture.componentInstance;
    component.training = { teamId: "test-team", id: "test-training" } as any;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
