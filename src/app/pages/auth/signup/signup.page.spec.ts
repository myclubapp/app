import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import {
  AlertController,
  LoadingController,
  MenuController,
  IonicModule,
} from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

import { SignupPage } from "./signup.page";
import { AuthService } from "src/app/services/auth.service";

describe("SignupPage", () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let router: Router;
  let alertCtrlSpy: jasmine.SpyObj<AlertController>;
  let loadingCtrlSpy: jasmine.SpyObj<LoadingController>;
  let menuCtrlSpy: jasmine.SpyObj<MenuController>;

  const mockAlert = {
    present: jasmine.createSpy("present").and.resolveTo(),
    onDidDismiss: jasmine
      .createSpy("onDidDismiss")
      .and.resolveTo({ role: "confirm" }),
  };

  const mockLoading = {
    present: jasmine.createSpy("present").and.resolveTo(),
    dismiss: jasmine.createSpy("dismiss").and.resolveTo(),
  };

  beforeEach(waitForAsync(() => {
    authServiceSpy = jasmine.createSpyObj("AuthService", ["signup", "login"]);
    alertCtrlSpy = jasmine.createSpyObj("AlertController", ["create"]);
    alertCtrlSpy.create.and.resolveTo(mockAlert as any);
    loadingCtrlSpy = jasmine.createSpyObj("LoadingController", ["create"]);
    loadingCtrlSpy.create.and.resolveTo(mockLoading as any);
    menuCtrlSpy = jasmine.createSpyObj("MenuController", ["enable"]);

    TestBed.configureTestingModule({
      declarations: [SignupPage],
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        IonicModule.forRoot(),
        RouterTestingModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: AlertController, useValue: alertCtrlSpy },
        { provide: LoadingController, useValue: loadingCtrlSpy },
        { provide: MenuController, useValue: menuCtrlSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("form validation", () => {
    it("should have email, password, firstName, lastName fields", () => {
      expect(component.authForm.controls["email"]).toBeDefined();
      expect(component.authForm.controls["password"]).toBeDefined();
      expect(component.authForm.controls["firstName"]).toBeDefined();
      expect(component.authForm.controls["lastName"]).toBeDefined();
    });

    it("should be invalid with empty fields", () => {
      expect(component.authForm.valid).toBeFalse();
    });

    it("should require firstName", () => {
      component.authForm.patchValue({
        email: "test@example.com",
        password: "123456",
        firstName: "",
        lastName: "Müller",
      });
      expect(component.authForm.valid).toBeFalse();
    });

    it("should require lastName", () => {
      component.authForm.patchValue({
        email: "test@example.com",
        password: "123456",
        firstName: "Max",
        lastName: "",
      });
      expect(component.authForm.valid).toBeFalse();
    });

    it("should be valid with all fields filled correctly", () => {
      component.authForm.patchValue({
        email: "test@example.com",
        password: "123456",
        firstName: "Max",
        lastName: "Müller",
      });
      expect(component.authForm.valid).toBeTrue();
    });

    it("should require valid email format", () => {
      component.authForm.patchValue({
        email: "invalid",
        password: "123456",
        firstName: "Max",
        lastName: "Müller",
      });
      expect(component.authForm.controls["email"].valid).toBeFalse();
    });

    it("should require password with min 6 chars", () => {
      component.authForm.patchValue({
        email: "test@example.com",
        password: "12345",
        firstName: "Max",
        lastName: "Müller",
      });
      expect(component.authForm.controls["password"].valid).toBeFalse();
    });
  });

  describe("submitCredentials", () => {
    it("should show alert when form is invalid", async () => {
      component.authForm.patchValue({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });

      await component.submitCredentials(component.authForm);

      expect(alertCtrlSpy.create).toHaveBeenCalled();
    });

    it("should call signup and login on valid form", async () => {
      const mockCredential = {
        operationType: "signIn",
        user: { email: "test@example.com" },
      };
      authServiceSpy.signup.and.resolveTo(mockCredential as any);
      authServiceSpy.login.and.resolveTo(mockCredential as any);
      spyOn(router, "navigateByUrl").and.resolveTo(true);

      component.authForm.patchValue({
        email: "test@example.com",
        password: "123456",
        firstName: "Max",
        lastName: "Müller",
      });

      await component.submitCredentials(component.authForm);

      expect(authServiceSpy.signup).toHaveBeenCalledWith(
        "test@example.com",
        "123456",
        "Max",
        "Müller",
      );
      expect(authServiceSpy.login).toHaveBeenCalledWith(
        "test@example.com",
        "123456",
      );
      expect(router.navigateByUrl).toHaveBeenCalledWith("/");
    });

    it("should handle auth/email-already-in-use error", async () => {
      authServiceSpy.signup.and.rejectWith({
        code: "auth/email-already-in-use",
        message: "Email already in use",
      });

      component.authForm.patchValue({
        email: "existing@example.com",
        password: "123456",
        firstName: "Max",
        lastName: "Müller",
      });

      await component.submitCredentials(component.authForm);

      expect(mockLoading.dismiss).toHaveBeenCalled();
      expect(alertCtrlSpy.create).toHaveBeenCalled();
    });
  });

  describe("ngOnInit", () => {
    it("should disable side menu", () => {
      component.ngOnInit();
      expect(menuCtrlSpy.enable).toHaveBeenCalledWith(false, "menu");
    });
  });

  describe("signupUser", () => {
    it("should delegate to authService.signup", async () => {
      authServiceSpy.signup.and.resolveTo({} as any);
      const credentials = { email: "test@example.com", password: "123456" };
      const userData = { firstName: "Max", lastName: "Müller" };

      await component.signupUser(credentials, userData);

      expect(authServiceSpy.signup).toHaveBeenCalledWith(
        "test@example.com",
        "123456",
        "Max",
        "Müller",
      );
    });
  });
});
