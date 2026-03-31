import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
  ToastController,
  Platform,
} from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { Timestamp } from "@angular/fire/firestore";

import { TrainingDetailPage } from "./training-detail.page";
import { AuthService } from "src/app/services/auth.service";
import { TrainingService } from "src/app/services/firebase/training.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ExerciseService } from "src/app/services/firebase/exercise.service";
import { UiService } from "src/app/services/ui.service";
import { Training } from "src/app/models/training";

describe("TrainingDetailPage", () => {
  let component: TrainingDetailPage;
  let fixture: ComponentFixture<TrainingDetailPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let trainingServiceSpy: jasmine.SpyObj<TrainingService>;
  let userProfileServiceSpy: jasmine.SpyObj<UserProfileService>;
  let fbServiceSpy: jasmine.SpyObj<FirebaseService>;
  let exerciseServiceSpy: jasmine.SpyObj<ExerciseService>;
  let uiServiceSpy: jasmine.SpyObj<UiService>;
  let modalCtrlSpy: jasmine.SpyObj<ModalController>;
  let alertCtrlSpy: jasmine.SpyObj<AlertController>;

  const mockUser = { uid: "user-123", email: "test@example.com" };

  // Future training (in 48h)
  const futureDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
  const mockTraining: Partial<Training> = {
    id: "training-1",
    name: "Dienstag Training",
    teamId: "team-1",
    date: Timestamp.fromDate(futureDate),
    timeFrom: "18:00",
    timeTo: "20:00",
    location: "Sportplatz",
    cancelled: false,
  };

  // Past training (2h ago)
  const pastDate = new Date(Date.now() - 2 * 60 * 60 * 1000);
  const mockPastTraining: Partial<Training> = {
    ...mockTraining,
    id: "training-past",
    date: Timestamp.fromDate(pastDate),
  };

  beforeEach(waitForAsync(() => {
    authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(mockUser as any));

    trainingServiceSpy = jasmine.createSpyObj("TrainingService", [
      "getTeamTrainingRef",
      "getTeamTrainingsAttendeesRef",
      "setTeamTrainingAttendeeStatusAdmin",
      "updateTraining",
      "deleteTeamTraining",
      "sendReminder",
    ]);
    trainingServiceSpy.getTeamTrainingRef.and.returnValue(
      of(mockTraining as any),
    );
    trainingServiceSpy.getTeamTrainingsAttendeesRef.and.returnValue(of([]));
    trainingServiceSpy.setTeamTrainingAttendeeStatusAdmin.and.resolveTo();

    userProfileServiceSpy = jasmine.createSpyObj("UserProfileService", [
      "getChildren",
      "getUserProfileById",
    ]);
    userProfileServiceSpy.getChildren.and.returnValue(of([]));

    fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamRef",
      "getTeamMemberRefs",
      "getTeamAdminList",
      "getClubList",
      "isTeamAdmin",
    ]);
    fbServiceSpy.getTeamRef.and.returnValue(
      of({ id: "team-1", trainingThreshold: 2 } as any),
    );
    fbServiceSpy.getTeamMemberRefs.and.returnValue(of([]));
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));
    fbServiceSpy.getClubList.and.returnValue(of([]));
    fbServiceSpy.isTeamAdmin.and.returnValue(false);

    exerciseServiceSpy = jasmine.createSpyObj("ExerciseService", [
      "getTeamTrainingExerciseRefs",
    ]);
    exerciseServiceSpy.getTeamTrainingExerciseRefs.and.returnValue(of([]));

    uiServiceSpy = jasmine.createSpyObj("UiService", [
      "showSuccessToast",
      "showErrorToast",
      "showConfirmDialog",
      "showFormDialog",
      "showActionSheet",
    ]);

    modalCtrlSpy = jasmine.createSpyObj("ModalController", [
      "create",
      "dismiss",
      "getTop",
    ]);
    alertCtrlSpy = jasmine.createSpyObj("AlertController", ["create"]);

    TestBed.configureTestingModule({
      declarations: [TrainingDetailPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: TrainingService, useValue: trainingServiceSpy },
        { provide: UserProfileService, useValue: userProfileServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        { provide: ExerciseService, useValue: exerciseServiceSpy },
        { provide: UiService, useValue: uiServiceSpy },
        { provide: ModalController, useValue: modalCtrlSpy },
        { provide: AlertController, useValue: alertCtrlSpy },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
        {
          provide: Platform,
          useValue: jasmine.createSpyObj("Platform", ["is"]),
        },
        { provide: IonRouterOutlet, useValue: { nativeEl: {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingDetailPage);
    component = fixture.componentInstance;
    component.data = mockTraining as Training;
    component.isFuture = true;
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", () => {
    it("should set training from input data", () => {
      component.ngOnInit();
      expect(component.training).toEqual(mockTraining as Training);
    });

    it("should initialize training$ observable", () => {
      component.ngOnInit();
      expect(component.training$).toBeDefined();
    });

    it("should handle missing training data", () => {
      spyOn(console, "error");
      component.data = undefined;
      component.ngOnInit();
      expect(console.error).toHaveBeenCalledWith("Training data not provided");
    });
  });

  describe("isTeamAdmin", () => {
    it("should delegate to fbService.isTeamAdmin", () => {
      fbServiceSpy.isTeamAdmin.and.returnValue(true);
      const result = component.isTeamAdmin([{ id: "team-1" }], "team-1");
      expect(result).toBeTrue();
      expect(fbServiceSpy.isTeamAdmin).toHaveBeenCalled();
    });
  });

  describe("processToggle - attendance", () => {
    it("should register attendance for future training", async () => {
      component.training = mockTraining as Training;
      component.teamAdminList$ = of([]);

      const trainingData = {
        ...mockTraining,
        teamId: "team-1",
        date: Timestamp.fromDate(futureDate),
        timeFrom: "18:00",
      };

      await component.processToggle("user-123", true, trainingData);

      expect(
        trainingServiceSpy.setTeamTrainingAttendeeStatusAdmin,
      ).toHaveBeenCalledWith(true, "team-1", "training-1", "user-123");
    });

    it("should block late cancellation for non-admin within threshold", async () => {
      component.training = mockPastTraining as Training;
      component.teamAdminList$ = of([]);

      // Set team with 24h threshold
      fbServiceSpy.getTeamRef.and.returnValue(
        of({ id: "team-1", trainingThreshold: 24 } as any),
      );

      const pastTrainingData = {
        ...mockPastTraining,
        teamId: "team-1",
        date: Timestamp.fromDate(pastDate),
        timeFrom: "18:00",
      };

      const alertMock = {
        present: jasmine.createSpy("present"),
      };
      alertCtrlSpy.create.and.resolveTo(alertMock as any);

      await component.processToggle("user-123", false, pastTrainingData);

      // Should NOT have called the service (too late)
      expect(
        trainingServiceSpy.setTeamTrainingAttendeeStatusAdmin,
      ).not.toHaveBeenCalled();
    });

    it("should allow admin to cancel even within threshold", async () => {
      component.training = mockPastTraining as Training;
      fbServiceSpy.isTeamAdmin.and.returnValue(true);
      component.teamAdminList$ = of([{ id: "team-1" }] as any);

      // Team with threshold
      fbServiceSpy.getTeamRef.and.returnValue(
        of({ id: "team-1", trainingThreshold: 24 } as any),
      );

      const trainingData = {
        ...mockPastTraining,
        teamId: "team-1",
        date: Timestamp.fromDate(pastDate),
        timeFrom: "18:00",
      };

      await component.processToggle("user-123", false, trainingData);

      expect(
        trainingServiceSpy.setTeamTrainingAttendeeStatusAdmin,
      ).toHaveBeenCalled();
    });
  });

  describe("enableMyClubPro", () => {
    it("should return true when a club has MyClubPro feature", () => {
      expect(
        component.enableMyClubPro([{ hasFeatureMyClubPro: true }]),
      ).toBeTrue();
    });

    it("should return false when no club has MyClubPro feature", () => {
      expect(
        component.enableMyClubPro([{ hasFeatureMyClubPro: false }]),
      ).toBeFalse();
    });
  });

  describe("edit mode", () => {
    it("should toggle allowEdit flag", async () => {
      component.training = mockTraining as Training;
      expect(component.allowEdit).toBeFalse();

      await component.edit();
      expect(component.allowEdit).toBeTrue();
    });

    it("should save changes when toggling off edit mode with changes", async () => {
      component.training = mockTraining as Training;
      component.allowEdit = true;
      component.trainingHasChanged = { name: "Updated Training" };
      trainingServiceSpy.updateTraining.and.resolveTo();
      uiServiceSpy.showSuccessToast.and.resolveTo();

      await component.edit();

      expect(trainingServiceSpy.updateTraining).toHaveBeenCalledWith(
        "team-1",
        "training-1",
        { name: "Updated Training" },
      );
      expect(component.allowEdit).toBeFalse();
    });

    it("should not save when no changes were made", async () => {
      component.training = mockTraining as Training;
      component.allowEdit = true;
      component.trainingHasChanged = {};

      await component.edit();

      expect(trainingServiceSpy.updateTraining).not.toHaveBeenCalled();
    });
  });

  describe("modal actions", () => {
    it("should close modal with null", async () => {
      modalCtrlSpy.dismiss.and.resolveTo(true);
      await component.close();
      expect(modalCtrlSpy.dismiss).toHaveBeenCalledWith(null, "close");
    });

    it("should confirm modal with training data", async () => {
      component.training = mockTraining as Training;
      modalCtrlSpy.dismiss.and.resolveTo(true);
      await component.confirm();
      expect(modalCtrlSpy.dismiss).toHaveBeenCalledWith(
        mockTraining as Training,
        "confirm",
      );
    });
  });

  describe("updateTraining", () => {
    it("should track changed fields with value", async () => {
      const event = { detail: { value: "New Location" } };
      await component.updateTraining(event, "location");
      expect(component.trainingHasChanged["location"]).toBe("New Location");
    });

    it("should track changed fields with checked property", async () => {
      const event = { detail: { checked: true } };
      await component.updateTraining(event, "cancelled");
      expect(component.trainingHasChanged["cancelled"]).toBeTrue();
    });
  });

  describe("template - skeleton loading", () => {
    it("should set up training$ observable for template rendering", () => {
      // After ngOnInit, training$ should be defined
      // The template shows ion-skeleton-text until training$ emits data
      component.ngOnInit();
      expect(component.training$).toBeDefined();
    });

    it("should set up exerciseList$ observable for template rendering", () => {
      component.ngOnInit();
      expect(component.exerciseList$).toBeDefined();
    });
  });

  describe("template - ion-item-sliding", () => {
    it("should use toggleItem to handle sliding item interactions", async () => {
      component.training = mockTraining as Training;
      component.teamAdminList$ = of([]);

      const mockSlidingItem = {
        close: jasmine.createSpy("close").and.resolveTo(),
      };

      const trainingData = {
        ...mockTraining,
        teamId: "team-1",
        date: Timestamp.fromDate(futureDate),
        timeFrom: "18:00",
      };

      spyOn(component, "processToggle" as any).and.resolveTo();

      await component.toggleItem(
        mockSlidingItem as any,
        true,
        trainingData,
        "user-123",
      );

      expect(mockSlidingItem.close).toHaveBeenCalled();
    });

    it("should close sliding item before processing toggle", async () => {
      const closeOrder: string[] = [];
      const mockSlidingItem = {
        close: jasmine.createSpy("close").and.callFake(() => {
          closeOrder.push("close");
          return Promise.resolve();
        }),
      };

      spyOn(component, "processToggle" as any).and.callFake(() => {
        closeOrder.push("toggle");
        return Promise.resolve();
      });

      component.training = mockTraining as Training;
      await component.toggleItem(
        mockSlidingItem as any,
        true,
        mockTraining,
        "user-123",
      );

      expect(closeOrder[0]).toBe("close");
    });
  });
});
