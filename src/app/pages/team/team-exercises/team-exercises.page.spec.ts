import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TeamExercisesPage } from "./team-exercises.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { ExerciseService } from "src/app/services/firebase/exercise.service";
import { ModalController, ToastController } from "@ionic/angular";

describe("TeamExercisesPage", () => {
  let component: TeamExercisesPage;
  let fixture: ComponentFixture<TeamExercisesPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamRef",
      "getClubRef",
    ]);
    fbServiceSpy.getTeamRef.and.returnValue(of({ type: "test" }));
    const exerciseServiceSpy = jasmine.createSpyObj("ExerciseService", [
      "getExerciseRefs",
      "getTeamExerciseRefs",
      "getTeamTrainingExerciseRefs",
      "addTeamTrainingExercise",
      "addTeamExercise",
      "removeTeamExercise",
    ]);
    exerciseServiceSpy.getExerciseRefs.and.returnValue(of([]));
    exerciseServiceSpy.getTeamExerciseRefs.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [TeamExercisesPage],
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

    fixture = TestBed.createComponent(TeamExercisesPage);
    component = fixture.componentInstance;
    component.training = {
      teamId: "test-team",
      id: "test-training",
      clubId: "test-club",
    };
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
