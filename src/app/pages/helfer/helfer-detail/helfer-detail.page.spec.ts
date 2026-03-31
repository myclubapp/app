import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { Timestamp } from "@angular/fire/firestore";

import { HelferDetailPage } from "./helfer-detail.page";
import { AuthService } from "src/app/services/auth.service";
import { EventService } from "src/app/services/firebase/event.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";
import { HelferEvent } from "src/app/models/event";

describe("HelferDetailPage", () => {
  let component: HelferDetailPage;
  let fixture: ComponentFixture<HelferDetailPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let eventServiceSpy: jasmine.SpyObj<EventService>;
  let userProfileServiceSpy: jasmine.SpyObj<UserProfileService>;
  let fbServiceSpy: jasmine.SpyObj<FirebaseService>;
  let uiServiceSpy: jasmine.SpyObj<UiService>;
  let modalCtrlSpy: jasmine.SpyObj<ModalController>;
  let toastCtrlSpy: jasmine.SpyObj<ToastController>;
  let alertCtrlSpy: jasmine.SpyObj<AlertController>;

  const mockUser = { uid: "user-123", email: "test@example.com" };

  const futureDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
  const pastDate = new Date(Date.now() - 2 * 60 * 60 * 1000);

  const mockHelferEvent: Partial<HelferEvent> = {
    id: "helfer-1",
    name: "Vereinsfest Helfer",
    clubId: "club-1",
    date: Timestamp.fromDate(futureDate),
    timeFrom: "2026-04-01T10:00:00",
    timeTo: "2026-04-01T18:00:00",
    location: "Vereinsgelände",
  };

  const mockSchicht = {
    id: "schicht-1",
    name: "Grillstand",
    countNeeded: 3,
    points: 2,
    timeFrom: "10:00",
    timeTo: "14:00",
    attendeeListTrue: [
      { id: "member-1", firstName: "Anna", lastName: "B", status: true },
    ],
    attendeeListFalse: [],
    unrespondedMembers: [],
  };

  const mockFullSchicht = {
    ...mockSchicht,
    countNeeded: 1, // Only 1 needed, already 1 signed up
  };

  beforeEach(waitForAsync(() => {
    authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(mockUser as any));

    eventServiceSpy = jasmine.createSpyObj("EventService", [
      "getClubHelferEventRef",
      "getClubHelferEventSchichtenRef",
      "getClubHelferEventSchichtAttendeesRef",
      "setClubHelferEventSchichtAttendeeStatusAdmin",
      "setClubHelferEventSchichtAttendeeStatusConfirm",
      "addNewHelferEventSchicht",
      "changeHelferEventSchicht",
      "deleteHelferEventSchicht",
      "changeHelferEvent",
      "deleteHelferEvent",
    ]);
    eventServiceSpy.getClubHelferEventRef.and.returnValue(
      of(mockHelferEvent as any),
    );
    eventServiceSpy.getClubHelferEventSchichtenRef.and.returnValue(of([]));
    eventServiceSpy.getClubHelferEventSchichtAttendeesRef.and.returnValue(
      of([]),
    );
    eventServiceSpy.setClubHelferEventSchichtAttendeeStatusAdmin.and.resolveTo();

    userProfileServiceSpy = jasmine.createSpyObj("UserProfileService", [
      "getChildren",
      "getUserProfileById",
    ]);
    userProfileServiceSpy.getChildren.and.returnValue(of([]));

    fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubRef",
      "getClubMemberRefs",
      "getClubAdminList",
      "isClubAdmin",
    ]);
    fbServiceSpy.getClubRef.and.returnValue(
      of({ id: "club-1", helferThreshold: 2 } as any),
    );
    fbServiceSpy.getClubMemberRefs.and.returnValue(of([]));
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));
    fbServiceSpy.isClubAdmin.and.returnValue(false);

    uiServiceSpy = jasmine.createSpyObj("UiService", [
      "showSuccessToast",
      "showErrorToast",
      "showInfoDialog",
      "showConfirmDialog",
      "showFormDialog",
      "showActionSheet",
    ]);

    modalCtrlSpy = jasmine.createSpyObj("ModalController", [
      "create",
      "dismiss",
      "getTop",
    ]);
    toastCtrlSpy = jasmine.createSpyObj("ToastController", ["create"]);
    toastCtrlSpy.create.and.resolveTo({
      present: jasmine.createSpy("present"),
    } as any);
    alertCtrlSpy = jasmine.createSpyObj("AlertController", ["create"]);

    TestBed.configureTestingModule({
      declarations: [HelferDetailPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: EventService, useValue: eventServiceSpy },
        { provide: UserProfileService, useValue: userProfileServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        { provide: UiService, useValue: uiServiceSpy },
        { provide: ModalController, useValue: modalCtrlSpy },
        { provide: AlertController, useValue: alertCtrlSpy },
        { provide: ToastController, useValue: toastCtrlSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HelferDetailPage);
    component = fixture.componentInstance;
    component.data = mockHelferEvent as HelferEvent;
    component.isFuture = true;
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", () => {
    it("should set event from input data", async () => {
      await component.ngOnInit();
      expect(component.event).toEqual(mockHelferEvent as HelferEvent);
    });

    it("should initialize observables", async () => {
      await component.ngOnInit();
      expect(component.event$).toBeDefined();
      expect(component.schichten$).toBeDefined();
    });

    it("should handle missing event data", async () => {
      spyOn(console, "error");
      component.data = undefined;
      await component.ngOnInit();
      expect(console.error).toHaveBeenCalledWith(
        "Helfer event data not provided",
      );
    });
  });

  describe("toggleSchichtItem - shift signup", () => {
    const slidingItemMock = {
      closeOpened: jasmine.createSpy("closeOpened").and.resolveTo(),
    };

    it("should register for a shift with available capacity", async () => {
      component.event = mockHelferEvent as HelferEvent;
      component.clubAdminList$ = of([]);

      const eventData = {
        ...mockHelferEvent,
        date: Timestamp.fromDate(futureDate),
        timeFrom: "10:00",
      };

      await component.toggleSchichtItem(
        slidingItemMock as any,
        true,
        eventData,
        mockSchicht,
        "user-123",
      );

      expect(
        eventServiceSpy.setClubHelferEventSchichtAttendeeStatusAdmin,
      ).toHaveBeenCalledWith(
        true,
        "club-1",
        "helfer-1",
        "schicht-1",
        "user-123",
      );
    });

    it("should block signup when shift is full (non-admin)", async () => {
      component.event = mockHelferEvent as HelferEvent;
      component.clubAdminList$ = of([]);
      uiServiceSpy.showInfoDialog.and.resolveTo();

      const eventData = {
        ...mockHelferEvent,
        date: Timestamp.fromDate(futureDate),
        timeFrom: "10:00",
      };

      await component.toggleSchichtItem(
        slidingItemMock as any,
        true,
        eventData,
        mockFullSchicht,
        "user-123",
      );

      // Should show "too many" dialog
      expect(uiServiceSpy.showInfoDialog).toHaveBeenCalled();
      expect(
        eventServiceSpy.setClubHelferEventSchichtAttendeeStatusAdmin,
      ).not.toHaveBeenCalled();
    });

    it("should allow admin to overbook a full shift", async () => {
      component.event = mockHelferEvent as HelferEvent;
      fbServiceSpy.isClubAdmin.and.returnValue(true);
      component.clubAdminList$ = of([{ id: "club-1" }] as any);

      const eventData = {
        ...mockHelferEvent,
        date: Timestamp.fromDate(futureDate),
        timeFrom: "10:00",
      };

      await component.toggleSchichtItem(
        slidingItemMock as any,
        true,
        eventData,
        mockFullSchicht,
        "user-123",
      );

      expect(
        eventServiceSpy.setClubHelferEventSchichtAttendeeStatusAdmin,
      ).toHaveBeenCalled();
    });

    it("should block late cancellation within threshold for non-admin", async () => {
      component.event = mockHelferEvent as HelferEvent;
      component.clubAdminList$ = of([]);

      fbServiceSpy.getClubRef.and.returnValue(
        of({ id: "club-1", helferThreshold: 24 } as any),
      );
      uiServiceSpy.showInfoDialog.and.resolveTo();

      const pastEventData = {
        ...mockHelferEvent,
        id: "helfer-1",
        clubId: "club-1",
        date: Timestamp.fromDate(pastDate),
        timeFrom: "10:00",
      };

      const emptySchicht = { ...mockSchicht, attendeeListTrue: [] };

      await component.toggleSchichtItem(
        slidingItemMock as any,
        false,
        pastEventData,
        emptySchicht,
        "user-123",
      );

      expect(
        eventServiceSpy.setClubHelferEventSchichtAttendeeStatusAdmin,
      ).not.toHaveBeenCalled();
    });
  });

  describe("isClubAdmin", () => {
    it("should return true for admin", () => {
      fbServiceSpy.isClubAdmin.and.returnValue(true);
      expect(component.isClubAdmin([{ id: "club-1" }], "club-1")).toBeTrue();
    });

    it("should return false for non-admin", () => {
      fbServiceSpy.isClubAdmin.and.returnValue(false);
      expect(component.isClubAdmin([], "club-1")).toBeFalse();
    });
  });

  describe("edit mode", () => {
    it("should toggle allowEdit", async () => {
      component.event = mockHelferEvent as HelferEvent;
      component.eventHasChanged = {};
      expect(component.allowEdit).toBeFalse();

      await component.edit();
      expect(component.allowEdit).toBeTrue();
    });

    it("should save when changes exist", async () => {
      component.event = mockHelferEvent as HelferEvent;
      component.allowEdit = true;
      component.eventHasChanged = { name: "Neuer Name" };
      eventServiceSpy.changeHelferEvent.and.resolveTo();

      await component.edit();

      expect(eventServiceSpy.changeHelferEvent).toHaveBeenCalledWith(
        { name: "Neuer Name" },
        "club-1",
        "helfer-1",
      );
    });
  });

  describe("addSchicht", () => {
    it("should call addNewHelferEventSchicht when form is valid", async () => {
      component.event = {
        ...mockHelferEvent,
        timeFrom: "2026-04-01T10:00:00",
        timeTo: "2026-04-01T18:00:00",
      } as HelferEvent;

      uiServiceSpy.showFormDialog.and.resolveTo({
        values: {
          name: "Getränkestand",
          countNeeded: 2,
          points: 1,
          timeFrom: "14:00",
          timeTo: "18:00",
        },
      });
      eventServiceSpy.addNewHelferEventSchicht.and.resolveTo({} as any);

      await component.addSchicht();

      expect(eventServiceSpy.addNewHelferEventSchicht).toHaveBeenCalledWith(
        "club-1",
        "helfer-1",
        {
          name: "Getränkestand",
          countNeeded: 2,
          points: 1,
          timeFrom: "14:00",
          timeTo: "18:00",
        },
      );
    });

    it("should show error when required fields are missing", async () => {
      component.event = {
        ...mockHelferEvent,
        timeFrom: "2026-04-01T10:00:00",
        timeTo: "2026-04-01T18:00:00",
      } as HelferEvent;

      uiServiceSpy.showFormDialog.and.resolveTo({
        values: {
          name: "",
          countNeeded: 2,
          points: 1,
          timeFrom: "",
          timeTo: "",
        },
      });
      uiServiceSpy.showErrorToast.and.resolveTo();

      await component.addSchicht();

      expect(uiServiceSpy.showErrorToast).toHaveBeenCalled();
      expect(eventServiceSpy.addNewHelferEventSchicht).not.toHaveBeenCalled();
    });

    it("should do nothing when dialog is cancelled", async () => {
      component.event = {
        ...mockHelferEvent,
        timeFrom: "2026-04-01T10:00:00",
        timeTo: "2026-04-01T18:00:00",
      } as HelferEvent;

      uiServiceSpy.showFormDialog.and.resolveTo(null);

      await component.addSchicht();

      expect(eventServiceSpy.addNewHelferEventSchicht).not.toHaveBeenCalled();
    });
  });

  describe("deleteSchicht", () => {
    it("should delete shift after confirmation", async () => {
      component.event = mockHelferEvent as HelferEvent;
      uiServiceSpy.showConfirmDialog.and.resolveTo(true);
      eventServiceSpy.deleteHelferEventSchicht.and.resolveTo();
      uiServiceSpy.showSuccessToast.and.resolveTo();

      await component.deleteSchicht(mockSchicht as any);

      expect(eventServiceSpy.deleteHelferEventSchicht).toHaveBeenCalledWith(
        "club-1",
        "helfer-1",
        "schicht-1",
      );
    });

    it("should not delete when user cancels", async () => {
      uiServiceSpy.showConfirmDialog.and.resolveTo(false);

      await component.deleteSchicht(mockSchicht as any);

      expect(eventServiceSpy.deleteHelferEventSchicht).not.toHaveBeenCalled();
    });
  });

  describe("editSchicht", () => {
    it("should update shift with new data", async () => {
      component.event = mockHelferEvent as HelferEvent;
      uiServiceSpy.showFormDialog.and.resolveTo({
        values: {
          name: "Neuer Grillstand",
          countNeeded: 5,
          points: 3,
          timeFrom: "12:00",
          timeTo: "16:00",
        },
      });
      eventServiceSpy.changeHelferEventSchicht.and.resolveTo();
      uiServiceSpy.showSuccessToast.and.resolveTo();

      await component.editSchicht(mockSchicht as any);

      expect(eventServiceSpy.changeHelferEventSchicht).toHaveBeenCalledWith(
        "club-1",
        "helfer-1",
        "schicht-1",
        {
          name: "Neuer Grillstand",
          countNeeded: 5,
          points: 3,
          timeFrom: "12:00",
          timeTo: "16:00",
        },
      );
    });
  });

  describe("modal actions", () => {
    it("should close modal", async () => {
      modalCtrlSpy.dismiss.and.resolveTo(true);
      await component.close();
      expect(modalCtrlSpy.dismiss).toHaveBeenCalledWith(null, "close");
    });

    it("should confirm modal with event data", async () => {
      component.event = mockHelferEvent as HelferEvent;
      modalCtrlSpy.dismiss.and.resolveTo(true);
      await component.confirm();
      expect(modalCtrlSpy.dismiss).toHaveBeenCalledWith(
        mockHelferEvent as HelferEvent,
        "confirm",
      );
    });
  });

  describe("template - ion-item-sliding for shifts", () => {
    it("should close sliding item in toggleSchichtItem", async () => {
      component.event = mockHelferEvent as HelferEvent;
      component.clubAdminList$ = of([]);

      const slidingItemMock = {
        closeOpened: jasmine.createSpy("closeOpened").and.resolveTo(),
      };

      const emptySchicht = {
        ...mockSchicht,
        attendeeListTrue: [],
        countNeeded: 5,
      };
      const eventData = {
        ...mockHelferEvent,
        date: Timestamp.fromDate(futureDate),
        timeFrom: "10:00",
      };

      await component.toggleSchichtItem(
        slidingItemMock as any,
        true,
        eventData,
        emptySchicht,
        "user-123",
      );

      expect(slidingItemMock.closeOpened).toHaveBeenCalled();
    });

    it("should pass correct memberId through sliding interaction", async () => {
      component.event = mockHelferEvent as HelferEvent;
      component.clubAdminList$ = of([]);

      const slidingItemMock = {
        closeOpened: jasmine.createSpy("closeOpened").and.resolveTo(),
      };

      const emptySchicht = {
        ...mockSchicht,
        attendeeListTrue: [],
        countNeeded: 5,
      };
      const eventData = {
        ...mockHelferEvent,
        date: Timestamp.fromDate(futureDate),
        timeFrom: "10:00",
      };

      await component.toggleSchichtItem(
        slidingItemMock as any,
        true,
        eventData,
        emptySchicht,
        "child-456",
      );

      expect(
        eventServiceSpy.setClubHelferEventSchichtAttendeeStatusAdmin,
      ).toHaveBeenCalledWith(
        true,
        "club-1",
        "helfer-1",
        "schicht-1",
        "child-456",
      );
    });
  });

  describe("template - skeleton loading", () => {
    it("should initialize observables for data loading on ngOnInit", async () => {
      // After ngOnInit, observables should be set up for rendering
      // The template shows skeleton-text until these observables emit
      await component.ngOnInit();
      expect(component.event$).toBeDefined();
      expect(component.schichten$).toBeDefined();
    });
  });

  describe("time validation", () => {
    it("should adjust timeTo when timeFrom exceeds it", () => {
      component.event = {
        ...mockHelferEvent,
        timeFrom: "20:00",
        timeTo: "18:00",
      } as HelferEvent;
      component.changeTimeFrom({ detail: { value: "20:00" } });
      expect(component.event.timeTo).toBe("20:00");
    });
  });
});
