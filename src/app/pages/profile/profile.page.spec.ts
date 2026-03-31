import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  IonRouterOutlet,
  LoadingController,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";

import { ProfilePage } from "./profile.page";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";

describe("ProfilePage", () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let fbServiceSpy: jasmine.SpyObj<FirebaseService>;
  let profileServiceSpy: jasmine.SpyObj<UserProfileService>;
  let uiServiceSpy: jasmine.SpyObj<UiService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let menuCtrlSpy: jasmine.SpyObj<MenuController>;
  let toastCtrlSpy: jasmine.SpyObj<ToastController>;

  const mockUser = { uid: "user-123", email: "test@example.com" };
  const mockProfile = {
    id: "user-123",
    email: "test@example.com",
    firstName: "Max",
    lastName: "Müller",
    settingsPush: false,
    settingsEmail: true,
    settingsEmailReporting: false,
    hideEmail: false,
    hidePhoneNumber: false,
    language: "de",
    dateOfBirth: null,
  };

  beforeEach(waitForAsync(() => {
    authServiceSpy = jasmine.createSpyObj("AuthService", [
      "getUser$",
      "deleteProfile",
    ]);
    authServiceSpy.getUser$.and.returnValue(of(mockUser as any));

    fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubList",
      "deleteUserClubRequest",
      "deleteUserTeamRequest",
    ]);
    fbServiceSpy.getClubList.and.returnValue(of([]));

    profileServiceSpy = jasmine.createSpyObj("UserProfileService", [
      "getUserProfile",
      "getKidsRequests",
      "getChildren",
      "getParents",
      "getUserProfileById",
      "changeProfileAttribute",
      "changeSettingsPush",
      "changeSettingsPushModule",
      "changeSettingsEmail",
      "changeSettingsEmailReporting",
      "changeShowGamePreview",
      "changeGamePreviewDays",
      "changeHideEmail",
      "changeHidePhoneNumber",
      "setUserProfilePicture",
      "addKidRequest",
      "deleteKidRequest",
      "deleteChild",
    ]);
    profileServiceSpy.getUserProfile.and.returnValue(of(mockProfile as any));
    profileServiceSpy.getKidsRequests.and.returnValue(of([]));
    profileServiceSpy.getChildren.and.returnValue(of([]));
    profileServiceSpy.getParents.and.returnValue(of([]));

    uiServiceSpy = jasmine.createSpyObj("UiService", [
      "showConfirmDialog",
      "showDeleteConfirmDialog",
      "showSuccessToast",
      "showErrorToast",
    ]);
    routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
    menuCtrlSpy = jasmine.createSpyObj("MenuController", ["enable"]);
    toastCtrlSpy = jasmine.createSpyObj("ToastController", ["create"]);
    toastCtrlSpy.create.and.resolveTo({
      present: jasmine.createSpy("present"),
    } as any);

    TestBed.configureTestingModule({
      declarations: [ProfilePage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        { provide: UserProfileService, useValue: profileServiceSpy },
        { provide: UiService, useValue: uiServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MenuController, useValue: menuCtrlSpy },
        { provide: ToastController, useValue: toastCtrlSpy },
        {
          provide: LoadingController,
          useValue: jasmine.createSpyObj("LoadingController", ["create"]),
        },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "getTop",
          ]),
        },
        { provide: IonRouterOutlet, useValue: { nativeEl: {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("getUserProfile", () => {
    it("should return profile data from auth and profile service", (done) => {
      component.userProfile$ = component.getUserProfile();
      component.userProfile$.subscribe((profile) => {
        expect(profile).toBeTruthy();
        expect(profile.firstName).toBe("Max");
        expect(profile.email).toBe("test@example.com");
        done();
      });
    });

    it("should return null if no user is logged in", (done) => {
      authServiceSpy.getUser$.and.returnValue(of(null));
      const result$ = component.getUserProfile();
      result$.subscribe((profile) => {
        expect(profile).toBeNull();
        done();
      });
    });
  });

  describe("profileChange", () => {
    it("should call changeProfileAttribute with correct field and value", async () => {
      profileServiceSpy.changeProfileAttribute.and.resolveTo();
      const event = { detail: { value: "Max" } };

      await component.profileChange(event, "firstName");

      expect(profileServiceSpy.changeProfileAttribute).toHaveBeenCalledWith(
        "Max",
        "firstName",
      );
    });

    it("should update language in translate service when language is changed", async () => {
      profileServiceSpy.changeProfileAttribute.and.resolveTo();
      const event = { detail: { value: "fr" } };

      await component.profileChange(event, "language");

      expect(profileServiceSpy.changeProfileAttribute).toHaveBeenCalledWith(
        "fr",
        "language",
      );
    });
  });

  describe("togglePush", () => {
    it("should call changeSettingsPush", async () => {
      profileServiceSpy.changeSettingsPush.and.resolveTo();
      const event = { detail: { checked: true } };

      await component.togglePush(event);

      expect(profileServiceSpy.changeSettingsPush).toHaveBeenCalledWith(true);
    });
  });

  describe("toggleEmail", () => {
    it("should call changeSettingsEmail", async () => {
      profileServiceSpy.changeSettingsEmail.and.resolveTo();
      const event = { detail: { checked: false } };

      await component.toggleEmail(event);

      expect(profileServiceSpy.changeSettingsEmail).toHaveBeenCalledWith(false);
    });
  });

  describe("toggleHideEmail", () => {
    it("should call changeHideEmail", async () => {
      profileServiceSpy.changeHideEmail.and.resolveTo();
      const event = { detail: { checked: true } };

      await component.toggleHideEmail(event);

      expect(profileServiceSpy.changeHideEmail).toHaveBeenCalledWith(true);
    });
  });

  describe("toggleHidePhoneNumber", () => {
    it("should call changeHidePhoneNumber", async () => {
      profileServiceSpy.changeHidePhoneNumber.and.resolveTo();
      const event = { detail: { checked: true } };

      await component.toggleHidePhoneNumber(event);

      expect(profileServiceSpy.changeHidePhoneNumber).toHaveBeenCalledWith(
        true,
      );
    });
  });

  describe("saveAddress", () => {
    it("should update all address fields", async () => {
      profileServiceSpy.changeProfileAttribute.and.resolveTo();

      await component.saveAddress({
        city: "Zürich",
        postalcode: "8000",
        street: "Bahnhofstrasse",
        houseNumber: "1",
      });

      expect(profileServiceSpy.changeProfileAttribute).toHaveBeenCalledWith(
        "Zürich",
        "city",
      );
      expect(profileServiceSpy.changeProfileAttribute).toHaveBeenCalledWith(
        "8000",
        "postalcode",
      );
      expect(profileServiceSpy.changeProfileAttribute).toHaveBeenCalledWith(
        "Bahnhofstrasse",
        "street",
      );
      expect(profileServiceSpy.changeProfileAttribute).toHaveBeenCalledWith(
        "Bahnhofstrasse 1",
        "streetAndNumber",
      );
      expect(profileServiceSpy.changeProfileAttribute).toHaveBeenCalledWith(
        "1",
        "houseNumber",
      );
    });
  });

  describe("saveEmail", () => {
    it("should update email field", async () => {
      profileServiceSpy.changeProfileAttribute.and.resolveTo();

      await component.saveEmail({ newEmail: "new@example.com" });

      expect(profileServiceSpy.changeProfileAttribute).toHaveBeenCalledWith(
        "new@example.com",
        "email",
      );
    });
  });

  describe("enableHelferEvents", () => {
    it("should return true when at least one club has helfer feature", () => {
      const clubs = [
        { hasFeatureHelferEvent: true },
        { hasFeatureHelferEvent: false },
      ];
      expect(component.enableHelferEvents(clubs)).toBeTrue();
    });

    it("should return false when no club has helfer feature", () => {
      const clubs = [{ hasFeatureHelferEvent: false }];
      expect(component.enableHelferEvents(clubs)).toBeFalse();
    });

    it("should return false for empty club list", () => {
      expect(component.enableHelferEvents([])).toBeFalse();
    });
  });

  describe("enableChampionship", () => {
    it("should return true when at least one club has championship feature", () => {
      const clubs = [{ hasFeatureChampionship: true }] as any;
      expect(component.enableChampionship(clubs)).toBeTrue();
    });

    it("should return false when no club has championship feature", () => {
      const clubs = [{ hasFeatureChampionship: false }] as any;
      expect(component.enableChampionship(clubs)).toBeFalse();
    });
  });

  describe("deleteProfile", () => {
    it("should confirm before deleting and navigate to logout", async () => {
      uiServiceSpy.showDeleteConfirmDialog.and.resolveTo(true);
      authServiceSpy.deleteProfile.and.resolveTo();
      routerSpy.navigateByUrl.and.resolveTo(true);

      await component.deleteProfile();

      expect(uiServiceSpy.showDeleteConfirmDialog).toHaveBeenCalled();
      expect(authServiceSpy.deleteProfile).toHaveBeenCalled();
      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith("/logout");
    });

    it("should not delete if user cancels confirmation", async () => {
      uiServiceSpy.showDeleteConfirmDialog.and.resolveTo(false);

      await component.deleteProfile();

      expect(authServiceSpy.deleteProfile).not.toHaveBeenCalled();
    });
  });

  describe("convertToLocalDateString", () => {
    it("should convert date to ISO string", () => {
      const date = new Date("2000-06-15T00:00:00Z");
      const result = component.convertToLocalDateString(date);
      expect(result).toContain("2000-06-15");
    });
  });

  describe("ngOnDestroy", () => {
    it("should unsubscribe from subscriptions", () => {
      // Set up mock subscriptions
      component.profileSubscription = {
        unsubscribe: jasmine.createSpy(),
      } as any;
      component.userSubscription = { unsubscribe: jasmine.createSpy() } as any;

      component.ngOnDestroy();

      expect(component.profileSubscription.unsubscribe).toHaveBeenCalled();
      expect(component.userSubscription.unsubscribe).toHaveBeenCalled();
    });
  });
});
