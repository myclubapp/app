import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { User } from "@angular/fire/auth";
import { AlertButton } from "@ionic/angular";
import { Club } from "./models/club";
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
  let fbServiceSpy: jasmine.SpyObj<FirebaseService>;
  let alertCtrlSpy: jasmine.SpyObj<AlertController>;
  let alertSpy: jasmine.SpyObj<HTMLIonAlertElement>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"], {
      user$: of(null),
      authState$: of(null),
    });
    authServiceSpy.getUser$.and.returnValue(of(null));
    fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubList",
      "countClubRefsOnServer",
    ]);
    fbServiceSpy.getClubList.and.returnValue(of([]));
    fbServiceSpy.countClubRefsOnServer.and.resolveTo(0);
    alertSpy = jasmine.createSpyObj("HTMLIonAlertElement", ["present"]);
    alertSpy.present.and.resolveTo();
    alertCtrlSpy = jasmine.createSpyObj("AlertController", ["create"]);
    alertCtrlSpy.create.and.resolveTo(alertSpy);

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
        { provide: AlertController, useValue: alertCtrlSpy },
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe("routeByClubList", () => {
    const user = { uid: "u1" } as User;
    let app: AppComponent;
    let router: Router;

    beforeEach(() => {
      app = TestBed.createComponent(AppComponent).componentInstance;
      router = TestBed.inject(Router);
      spyOn(router, "navigateByUrl").and.resolveTo(true);
    });

    it("shows the offline alert instead of the onboarding when the server is unreachable", async () => {
      fbServiceSpy.countClubRefsOnServer.and.resolveTo(null);

      await app.routeByClubList(user);

      expect(router.navigateByUrl).not.toHaveBeenCalled();
      expect(alertCtrlSpy.create).toHaveBeenCalledTimes(1);
      const options = alertCtrlSpy.create.calls.mostRecent().args[0];
      expect(options.header).toBe("common.offline");
      expect(options.buttons.length).toBe(1);
      expect(alertSpy.present).toHaveBeenCalled();
    });

    it("re-runs the club check when the retry button is pressed", async () => {
      fbServiceSpy.countClubRefsOnServer.and.resolveTo(null);
      await app.routeByClubList(user);
      const options = alertCtrlSpy.create.calls.mostRecent().args[0];
      const retryButton = options.buttons[0] as AlertButton;

      fbServiceSpy.countClubRefsOnServer.and.resolveTo(0);
      retryButton.handler(undefined);
      await Promise.resolve();
      await Promise.resolve();

      expect(fbServiceSpy.countClubRefsOnServer).toHaveBeenCalledTimes(2);
      expect(router.navigateByUrl).toHaveBeenCalledWith("/onboarding-club");
    });

    it("opens the club onboarding when the server confirms there are no clubs", async () => {
      fbServiceSpy.countClubRefsOnServer.and.resolveTo(0);

      await app.routeByClubList(user);

      expect(alertCtrlSpy.create).not.toHaveBeenCalled();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/onboarding-club");
    });

    it("re-reads the club list once when the cache was stale", async () => {
      fbServiceSpy.getClubList.and.returnValues(
        of([]),
        of([{ id: "c1", subscriptionActive: true } as unknown as Club]),
      );
      fbServiceSpy.countClubRefsOnServer.and.resolveTo(1);

      await app.routeByClubList(user);

      expect(fbServiceSpy.getClubList).toHaveBeenCalledTimes(2);
      expect(alertCtrlSpy.create).not.toHaveBeenCalled();
      expect(router.navigateByUrl).not.toHaveBeenCalledWith("/onboarding-club");
    });

    it("skips the server probe when the cache already has clubs", async () => {
      fbServiceSpy.getClubList.and.returnValue(
        of([{ id: "c1", subscriptionActive: true } as unknown as Club]),
      );

      await app.routeByClubList(user);

      expect(fbServiceSpy.countClubRefsOnServer).not.toHaveBeenCalled();
      expect(router.navigateByUrl).not.toHaveBeenCalledWith("/onboarding-club");
    });
  });
});
