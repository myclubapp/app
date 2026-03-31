import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrainingsPage } from "./trainings.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { TrainingService } from "src/app/services/firebase/training.service";
import { ExerciseService } from "src/app/services/firebase/exercise.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  MenuController,
  ToastController,
} from "@ionic/angular";

describe("TrainingsPage", () => {
  let component: TrainingsPage;
  let fixture: ComponentFixture<TrainingsPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamAdminList",
      "getUserTeamRefs",
      "getTeamMemberRefs",
      "getTeamRef",
      "isTeamAdmin",
    ]);
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [TrainingsPage],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: TrainingService,
          useValue: jasmine.createSpyObj("TrainingService", [
            "getTeamTrainingsRefs",
            "getTeamTrainingsPastRefs",
            "getTeamTrainingsAttendeesRef",
            "setTeamTrainingAttendeeStatus",
          ]),
        },
        {
          provide: ExerciseService,
          useValue: jasmine.createSpyObj("ExerciseService", [
            "getTeamTrainingExerciseRefs",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", ["getChildren"]),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", [
            "showSuccessToast",
            "showErrorToast",
            "showConfirmDialog",
            "showInfoDialog",
            "showFormDialog",
            "showActionSheet",
          ]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
            "getTop",
          ]),
        },
        {
          provide: MenuController,
          useValue: jasmine.createSpyObj("MenuController", ["enable"]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingsPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
