import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HelferPunkteClubPage } from "./helfer-punkte-club.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { HelferService } from "src/app/services/firebase/helfer.service";
import { EventService } from "src/app/services/firebase/event.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { Firestore } from "@angular/fire/firestore";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";

describe("HelferPunkteClubPage", () => {
  let component: HelferPunkteClubPage;
  let fixture: ComponentFixture<HelferPunkteClubPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
      "getClubMemberRefs",
      "getClubRef",
      "isClubAdmin",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));
    fbServiceSpy.getClubMemberRefs.and.returnValue(of([]));
    fbServiceSpy.getClubRef.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [HelferPunkteClubPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: HelferService,
          useValue: jasmine.createSpyObj("HelferService", [
            "getHelferPunkteListByClub",
          ]),
        },
        {
          provide: EventService,
          useValue: jasmine.createSpyObj("EventService", [
            "getClubHelferEventsRef",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfileById",
          ]),
        },
        { provide: Firestore, useValue: {} },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
          ]),
        },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HelferPunkteClubPage);
    component = fixture.componentInstance;
    component.clubId = "test-club";
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
