import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EventsPage } from "./events.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  MenuController,
  ToastController,
  AlertController,
} from "@ionic/angular";

describe("EventsPage", () => {
  let component: EventsPage;
  let fixture: ComponentFixture<EventsPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
      "getUserClubRefs",
      "getClubMemberRefs",
      "getClubRef",
      "isClubAdmin",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [EventsPage],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: EventService,
          useValue: jasmine.createSpyObj("EventService", ["getClubEventsRef"]),
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
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
