import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { SwUpdate } from "@angular/service-worker";
import { AuthService } from "./services/auth.service";
import { FirebaseService } from "./services/firebase.service";
import { UserProfileService } from "./services/firebase/user-profile.service";
import { UiService } from "./services/ui.service";
import {
  ModalController,
  MenuController,
  AlertController,
} from "@ionic/angular";

describe("AppComponent", () => {
  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"], {
      user$: of(null),
    });
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubList",
    ]);
    fbServiceSpy.getClubList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: SwUpdate,
          useValue: jasmine.createSpyObj("SwUpdate", ["checkForUpdate"], {
            isEnabled: false,
            versionUpdates: of(),
          }),
        },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
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
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
