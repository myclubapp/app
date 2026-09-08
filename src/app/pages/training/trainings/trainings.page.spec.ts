import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrainingsPage } from "./trainings.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { lastValueFrom, of } from "rxjs";
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
    const authServiceSpy = jasmine.createSpyObj("AuthService", [
      "getUser$",
      "getAuthenticatedUser$",
    ]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    authServiceSpy.getAuthenticatedUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamAdminList",
      "getTeamList",
      "getUserTeamRefs",
      "getTeamMemberRefs",
      "getTeamRef",
      "isTeamAdmin",
    ]);
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));
    fbServiceSpy.getTeamList.and.returnValue(of([]));

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

  it("offers registering and unregistering for all trainings", async () => {
    const uiService = TestBed.inject(UiService) as jasmine.SpyObj<UiService>;
    uiService.showActionSheet.and.resolveTo(undefined as any);

    await component.trainingListActions();

    const options = uiService.showActionSheet.calls.mostRecent().args[0] as any;
    expect(options.buttons.map((button) => button.text)).toEqual([
      "common.alle_anmelden",
      "common.alle_abmelden",
      "common.cancel",
    ]);
  });

  describe("toggleAll", () => {
    const inDays = (days: number) => ({
      toDate: () => new Date(Date.now() + days * 24 * 60 * 60 * 1000),
    });
    let trainingService: jasmine.SpyObj<TrainingService>;
    let uiService: jasmine.SpyObj<UiService>;

    beforeEach(() => {
      trainingService = TestBed.inject(
        TrainingService,
      ) as jasmine.SpyObj<TrainingService>;
      uiService = TestBed.inject(UiService) as jasmine.SpyObj<UiService>;
      trainingService.setTeamTrainingAttendeeStatus.and.resolveTo();
      uiService.showSuccessToast.and.resolveTo();
      uiService.showInfoDialog.and.resolveTo();
      uiService.showConfirmDialog.and.resolveTo(true);

      component.user = { uid: "user-1" } as any;
      component.filteredTrainingList$ = of([
        // Frist 24h, Training heute 00:00 Uhr -> Abmeldefrist abgelaufen
        {
          id: "t-late",
          teamId: "team-1",
          date: inDays(0),
          timeFrom: "00:00",
          team: { trainingThreshold: 24 },
        },
        // Frist 24h, Training in 10 Tagen -> Abmelden möglich
        {
          id: "t-ok",
          teamId: "team-1",
          date: inDays(10),
          timeFrom: "20:30",
          team: { trainingThreshold: 24 },
        },
        // Keine Frist -> Abmelden immer möglich
        {
          id: "t-no-threshold",
          teamId: "team-2",
          date: inDays(0),
          timeFrom: "00:00",
          team: {},
        },
      ] as any);
    });

    it("registers for every visible training", async () => {
      await component.toggleAll(true);

      expect(
        trainingService.setTeamTrainingAttendeeStatus,
      ).toHaveBeenCalledTimes(3);
      expect(
        trainingService.setTeamTrainingAttendeeStatus,
      ).toHaveBeenCalledWith(true, "team-1", "t-late");
      expect(uiService.showSuccessToast).toHaveBeenCalled();
      expect(uiService.showInfoDialog).not.toHaveBeenCalled();
    });

    it("skips trainings past the unsubscribe deadline and informs the user", async () => {
      await component.toggleAll(false);

      expect(
        trainingService.setTeamTrainingAttendeeStatus,
      ).toHaveBeenCalledTimes(2);
      expect(
        trainingService.setTeamTrainingAttendeeStatus,
      ).toHaveBeenCalledWith(false, "team-1", "t-ok");
      expect(
        trainingService.setTeamTrainingAttendeeStatus,
      ).toHaveBeenCalledWith(false, "team-2", "t-no-threshold");
      expect(uiService.showSuccessToast).toHaveBeenCalled();
      expect(uiService.showInfoDialog).toHaveBeenCalledTimes(1);
    });

    it("shows no success toast when every item is past the deadline", async () => {
      component.filteredTrainingList$ = of([
        {
          id: "t-late",
          teamId: "team-1",
          date: inDays(0),
          timeFrom: "00:00",
          team: { trainingThreshold: 24 },
        },
      ] as any);

      await component.toggleAll(false);

      expect(
        trainingService.setTeamTrainingAttendeeStatus,
      ).not.toHaveBeenCalled();
      expect(uiService.showSuccessToast).not.toHaveBeenCalled();
      expect(uiService.showInfoDialog).toHaveBeenCalledTimes(1);
    });

    it("asks for confirmation with the affected count and stops when cancelled", async () => {
      const translate = TestBed.inject(TranslateService);
      translate.setTranslation("de", {
        training: { alle_abmelden__confirm: "{{count}} Trainings abmelden?" },
      });
      await lastValueFrom(translate.use("de"));
      uiService.showConfirmDialog.and.resolveTo(false);

      await component.toggleAll(false);

      // Kein jasmine.objectContaining: das von karma-jasmine gebündelte jasmine-core 3.99 wirft
      // dafür in toHaveBeenCalledWith "ReferenceError: i is not defined".
      const options = uiService.showConfirmDialog.calls.mostRecent().args[0];
      expect(options.header).toBe("common.alle_abmelden");
      expect(options.message).toBe("3 Trainings abmelden?");
      expect(options.confirmText).toBe("common.abmelden");
      expect(
        trainingService.setTeamTrainingAttendeeStatus,
      ).not.toHaveBeenCalled();
      expect(uiService.showSuccessToast).not.toHaveBeenCalled();
    });
  });
});
