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

import { EventDetailPage } from "./event-detail.page";
import { AuthService } from "src/app/services/auth.service";
import { EventService } from "src/app/services/firebase/event.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";
import { Veranstaltung } from "src/app/models/event";

describe("EventDetailPage", () => {
  let component: EventDetailPage;
  let fixture: ComponentFixture<EventDetailPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let eventServiceSpy: jasmine.SpyObj<EventService>;
  let userProfileServiceSpy: jasmine.SpyObj<UserProfileService>;
  let fbServiceSpy: jasmine.SpyObj<FirebaseService>;
  let uiServiceSpy: jasmine.SpyObj<UiService>;
  let modalCtrlSpy: jasmine.SpyObj<ModalController>;
  let toastCtrlSpy: jasmine.SpyObj<ToastController>;

  const mockUser = { uid: "user-123", email: "test@example.com" };

  const futureDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
  const pastDate = new Date(Date.now() - 2 * 60 * 60 * 1000);

  const mockEvent: Partial<Veranstaltung> = {
    id: "event-1",
    name: "Vereinsfest",
    clubId: "club-1",
    date: Timestamp.fromDate(futureDate),
    timeFrom: "14:00",
    timeTo: "22:00",
    location: "Clubhaus",
    closedEvent: false,
  };

  beforeEach(waitForAsync(() => {
    authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(mockUser as any));

    eventServiceSpy = jasmine.createSpyObj("EventService", [
      "getClubEventRef",
      "getClubEventAttendeesRef",
      "setClubEventAttendeeStatusAdmin",
      "changeClubEvent",
      "deleteClubEvent",
      "sendReminder",
    ]);
    eventServiceSpy.getClubEventRef.and.returnValue(of(mockEvent as any));
    eventServiceSpy.getClubEventAttendeesRef.and.returnValue(of([]));
    eventServiceSpy.setClubEventAttendeeStatusAdmin.and.resolveTo();

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
      of({ id: "club-1", eventThreshold: 2 } as any),
    );
    fbServiceSpy.getClubMemberRefs.and.returnValue(of([]));
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));
    fbServiceSpy.isClubAdmin.and.returnValue(false);

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
    toastCtrlSpy = jasmine.createSpyObj("ToastController", ["create"]);
    toastCtrlSpy.create.and.resolveTo({
      present: jasmine.createSpy("present"),
    } as any);

    TestBed.configureTestingModule({
      declarations: [EventDetailPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: EventService, useValue: eventServiceSpy },
        { provide: UserProfileService, useValue: userProfileServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        { provide: UiService, useValue: uiServiceSpy },
        { provide: ModalController, useValue: modalCtrlSpy },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        { provide: ToastController, useValue: toastCtrlSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetailPage);
    component = fixture.componentInstance;
    component.data = mockEvent as Veranstaltung;
    component.isFuture = true;
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", () => {
    it("should set event from input data", () => {
      component.ngOnInit();
      expect(component.event).toEqual(mockEvent as Veranstaltung);
    });

    it("should initialize event$ observable", () => {
      component.ngOnInit();
      expect(component.event$).toBeDefined();
    });

    it("should handle missing event data", () => {
      spyOn(console, "error");
      component.data = undefined;
      component.ngOnInit();
      expect(console.error).toHaveBeenCalledWith("Event data not provided");
    });

    it("should initialize eventHasChanged as empty object", () => {
      component.ngOnInit();
      expect(component.eventHasChanged).toEqual({});
    });
  });

  describe("processToggle - event attendance", () => {
    it("should register attendance for future event", async () => {
      component.event = mockEvent as Veranstaltung;
      component.clubAdminList$ = of([]);

      const eventData = {
        ...mockEvent,
        clubId: "club-1",
        date: Timestamp.fromDate(futureDate),
        timeFrom: "14:00",
      };

      await component.processToggle("user-123", true, eventData);

      expect(
        eventServiceSpy.setClubEventAttendeeStatusAdmin,
      ).toHaveBeenCalledWith(true, "club-1", "event-1", "user-123");
    });

    it("should block late cancellation within threshold for non-admin", async () => {
      component.event = mockEvent as Veranstaltung;
      component.clubAdminList$ = of([]);

      fbServiceSpy.getClubRef.and.returnValue(
        of({ id: "club-1", eventThreshold: 24 } as any),
      );

      const pastEventData = {
        ...mockEvent,
        id: "event-1",
        clubId: "club-1",
        date: Timestamp.fromDate(pastDate),
        timeFrom: "14:00",
      };

      const alertMock = { present: jasmine.createSpy("present") };
      const alertCtrl = TestBed.inject(
        AlertController,
      ) as jasmine.SpyObj<AlertController>;
      alertCtrl.create.and.resolveTo(alertMock as any);

      await component.processToggle("user-123", false, pastEventData);

      expect(
        eventServiceSpy.setClubEventAttendeeStatusAdmin,
      ).not.toHaveBeenCalled();
    });

    it("should allow admin to cancel even within threshold", async () => {
      component.event = mockEvent as Veranstaltung;
      fbServiceSpy.isClubAdmin.and.returnValue(true);
      component.clubAdminList$ = of([{ id: "club-1" }] as any);

      fbServiceSpy.getClubRef.and.returnValue(
        of({ id: "club-1", eventThreshold: 24 } as any),
      );

      const pastEventData = {
        ...mockEvent,
        id: "event-1",
        clubId: "club-1",
        date: Timestamp.fromDate(pastDate),
        timeFrom: "14:00",
      };

      await component.processToggle("user-123", false, pastEventData);

      expect(
        eventServiceSpy.setClubEventAttendeeStatusAdmin,
      ).toHaveBeenCalled();
    });
  });

  describe("isClubAdmin", () => {
    it("should delegate to fbService.isClubAdmin", () => {
      fbServiceSpy.isClubAdmin.and.returnValue(true);
      const result = component.isClubAdmin([{ id: "club-1" }], "club-1");
      expect(result).toBeTrue();
    });

    it("should return false for non-admin", () => {
      fbServiceSpy.isClubAdmin.and.returnValue(false);
      const result = component.isClubAdmin([], "club-1");
      expect(result).toBeFalse();
    });
  });

  describe("edit mode", () => {
    it("should toggle allowEdit", async () => {
      component.event = mockEvent as Veranstaltung;
      component.eventHasChanged = {};
      expect(component.allowEdit).toBeFalse();

      await component.edit();
      expect(component.allowEdit).toBeTrue();
    });

    it("should save changes when toggling off with pending changes", async () => {
      component.event = mockEvent as Veranstaltung;
      component.allowEdit = true;
      component.eventHasChanged = { name: "Neuer Name" };
      eventServiceSpy.changeClubEvent.and.resolveTo();

      await component.edit();

      expect(eventServiceSpy.changeClubEvent).toHaveBeenCalledWith(
        { name: "Neuer Name" },
        "club-1",
        "event-1",
      );
    });
  });

  describe("updateEvent", () => {
    it("should track value changes", async () => {
      component.eventHasChanged = {};
      const event = { detail: { value: "Neuer Ort" } };
      await component.updateEvent(event, "location");
      expect(component.eventHasChanged["location"]).toBe("Neuer Ort");
    });

    it("should track checkbox changes", async () => {
      component.eventHasChanged = {};
      const event = { detail: { checked: true } };
      await component.updateEvent(event, "closedEvent");
      expect(component.eventHasChanged["closedEvent"]).toBeTrue();
    });
  });

  describe("modal actions", () => {
    it("should close modal", async () => {
      modalCtrlSpy.dismiss.and.resolveTo(true);
      await component.close();
      expect(modalCtrlSpy.dismiss).toHaveBeenCalledWith(null, "close");
    });

    it("should confirm modal with event data", async () => {
      component.event = mockEvent as Veranstaltung;
      modalCtrlSpy.dismiss.and.resolveTo(true);
      await component.confirm();
      expect(modalCtrlSpy.dismiss).toHaveBeenCalledWith(
        mockEvent as Veranstaltung,
        "confirm",
      );
    });
  });

  describe("template - ion-item-sliding", () => {
    it("should close sliding item via toggleItem before processing", async () => {
      component.event = mockEvent as Veranstaltung;
      component.clubAdminList$ = of([]);

      const mockSlidingItem = {
        close: jasmine.createSpy("close").and.resolveTo(),
      };

      spyOn(component, "processToggle" as any).and.resolveTo();

      await component.toggleItem(
        mockSlidingItem as any,
        true,
        mockEvent,
        "user-123",
      );

      expect(mockSlidingItem.close).toHaveBeenCalled();
    });

    it("should call processToggle with correct memberId after slide", async () => {
      const mockSlidingItem = {
        close: jasmine.createSpy("close").and.resolveTo(),
      };

      spyOn(component, "processToggle" as any).and.resolveTo();

      await component.toggleItem(
        mockSlidingItem as any,
        false,
        mockEvent,
        "member-456",
      );

      expect((component as any).processToggle).toHaveBeenCalledWith(
        "member-456",
        false,
        mockEvent,
      );
    });
  });

  describe("time validation", () => {
    it("should adjust timeTo when timeFrom exceeds it", () => {
      component.event = {
        ...mockEvent,
        timeFrom: "20:00",
        timeTo: "18:00",
      } as Veranstaltung;
      component.changeTimeFrom({ detail: { value: "20:00" } });
      expect(component.event.timeTo).toBe("20:00");
    });

    it("should not adjust timeTo when timeFrom is before it", () => {
      component.event = {
        ...mockEvent,
        timeFrom: "14:00",
        timeTo: "22:00",
      } as Veranstaltung;
      component.changeTimeFrom({ detail: { value: "14:00" } });
      expect(component.event.timeTo).toBe("22:00");
    });
  });
});
