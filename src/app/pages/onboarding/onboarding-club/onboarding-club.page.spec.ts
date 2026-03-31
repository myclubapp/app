import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OnboardingClubPage } from "./onboarding-club.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  MenuController,
  AlertController,
} from "@ionic/angular";

describe("OnboardingClubPage", () => {
  let component: OnboardingClubPage;
  let fixture: ComponentFixture<OnboardingClubPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [OnboardingClubPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: FirebaseService,
          useValue: jasmine.createSpyObj("FirebaseService", [
            "getClubList",
            "searchClubs",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfile",
          ]),
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
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingClubPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
