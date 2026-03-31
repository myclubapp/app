import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OnboardingEmailPage } from "./onboarding-email.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MenuController, ToastController } from "@ionic/angular";

describe("OnboardingEmailPage", () => {
  let component: OnboardingEmailPage;
  let fixture: ComponentFixture<OnboardingEmailPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [OnboardingEmailPage],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfile",
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

    fixture = TestBed.createComponent(OnboardingEmailPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
