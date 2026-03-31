import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HelferPunkteDetailPage } from "./helfer-punkte-detail.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { HelferService } from "src/app/services/firebase/helfer.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";

describe("HelferPunkteDetailPage", () => {
  let component: HelferPunkteDetailPage;
  let fixture: ComponentFixture<HelferPunkteDetailPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
      "isClubAdmin",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [HelferPunkteDetailPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: HelferService,
          useValue: jasmine.createSpyObj("HelferService", [
            "getHelferPunkteList",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfileById",
          ]),
        },
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

    fixture = TestBed.createComponent(HelferPunkteDetailPage);
    component = fixture.componentInstance;
    component.data = {};
    component.clubId = "test-club";
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
