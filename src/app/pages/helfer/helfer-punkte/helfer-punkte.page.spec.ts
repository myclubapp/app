import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HelferPunktePage } from "./helfer-punkte.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { HelferService } from "src/app/services/firebase/helfer.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { ModalController, ToastController } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

describe("HelferPunktePage", () => {
  let component: HelferPunktePage;
  let fixture: ComponentFixture<HelferPunktePage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [HelferPunktePage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: FirebaseService,
          useValue: jasmine.createSpyObj("FirebaseService", [
            "getUserClubRefs",
          ]),
        },
        {
          provide: HelferService,
          useValue: jasmine.createSpyObj("HelferService", [
            "getHelferPunkteListByClub",
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
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HelferPunktePage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
