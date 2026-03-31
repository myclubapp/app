import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import {
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
  IonicModule,
} from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

import { LoginPage } from "./login.page";
import { AuthService } from "src/app/services/auth.service";
import { UiService } from "src/app/services/ui.service";

describe("LoginPage", () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let loadingCtrlSpy: jasmine.SpyObj<LoadingController>;
  let menuCtrlSpy: jasmine.SpyObj<MenuController>;
  let uiServiceSpy: jasmine.SpyObj<UiService>;

  const mockLoading = {
    present: jasmine.createSpy("present").and.resolveTo(),
    dismiss: jasmine.createSpy("dismiss").and.resolveTo(),
  };

  beforeEach(waitForAsync(() => {
    authServiceSpy = jasmine.createSpyObj("AuthService", ["login"]);
    loadingCtrlSpy = jasmine.createSpyObj("LoadingController", ["create"]);
    loadingCtrlSpy.create.and.resolveTo(mockLoading as any);
    menuCtrlSpy = jasmine.createSpyObj("MenuController", ["enable"]);
    uiServiceSpy = jasmine.createSpyObj("UiService", ["showInfoDialog"]);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        IonicModule.forRoot(),
        RouterTestingModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: LoadingController, useValue: loadingCtrlSpy },
        { provide: MenuController, useValue: menuCtrlSpy },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", ["create"]),
        },
        { provide: UiService, useValue: uiServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("form validation", () => {
    it("should initialize with empty form", () => {
      expect(component.authForm).toBeDefined();
      expect(component.authForm.value.email).toBe("");
      expect(component.authForm.value.password).toBe("");
    });

    it("should be invalid with empty fields", () => {
      expect(component.authForm.valid).toBeFalse();
    });

    it("should be invalid with invalid email", () => {
      component.authForm.patchValue({
        email: "not-an-email",
        password: "123456",
      });
      expect(component.authForm.controls["email"].valid).toBeFalse();
    });

    it("should be invalid with short password", () => {
      component.authForm.patchValue({
        email: "test@example.com",
        password: "123",
      });
      expect(component.authForm.controls["password"].valid).toBeFalse();
    });

    it("should be valid with correct email and password (>=6 chars)", () => {
      component.authForm.patchValue({
        email: "test@example.com",
        password: "123456",
      });
      expect(component.authForm.valid).toBeTrue();
    });
  });

  describe("submitCredentials", () => {
    it("should call authService.login on valid form", async () => {
      authServiceSpy.login.and.resolveTo({} as any);
      component.authForm.patchValue({
        email: "test@example.com",
        password: "password123",
      });

      await component.submitCredentials(component.authForm);

      expect(loadingCtrlSpy.create).toHaveBeenCalled();
      expect(mockLoading.present).toHaveBeenCalled();
      expect(authServiceSpy.login).toHaveBeenCalledWith(
        "test@example.com",
        "password123",
      );
      expect(mockLoading.dismiss).toHaveBeenCalled();
    });

    it("should show error dialog on auth/user-not-found", async () => {
      authServiceSpy.login.and.rejectWith({ code: "auth/user-not-found" });
      uiServiceSpy.showInfoDialog.and.resolveTo();
      component.authForm.patchValue({
        email: "nouser@example.com",
        password: "password123",
      });

      await component.submitCredentials(component.authForm);

      expect(mockLoading.dismiss).toHaveBeenCalled();
      expect(uiServiceSpy.showInfoDialog).toHaveBeenCalled();
    });

    it("should show error dialog on auth/wrong-password", async () => {
      authServiceSpy.login.and.rejectWith({ code: "auth/wrong-password" });
      uiServiceSpy.showInfoDialog.and.resolveTo();
      component.authForm.patchValue({
        email: "test@example.com",
        password: "wrongpass",
      });

      await component.submitCredentials(component.authForm);

      expect(uiServiceSpy.showInfoDialog).toHaveBeenCalled();
    });

    it("should show error dialog on auth/user-disabled", async () => {
      authServiceSpy.login.and.rejectWith({ code: "auth/user-disabled" });
      uiServiceSpy.showInfoDialog.and.resolveTo();
      component.authForm.patchValue({
        email: "disabled@example.com",
        password: "password123",
      });

      await component.submitCredentials(component.authForm);

      expect(uiServiceSpy.showInfoDialog).toHaveBeenCalled();
    });

    it("should show error dialog on auth/invalid-credential", async () => {
      authServiceSpy.login.and.rejectWith({ code: "auth/invalid-credential" });
      uiServiceSpy.showInfoDialog.and.resolveTo();
      component.authForm.patchValue({
        email: "test@example.com",
        password: "password123",
      });

      await component.submitCredentials(component.authForm);

      expect(uiServiceSpy.showInfoDialog).toHaveBeenCalled();
    });
  });

  describe("ngOnInit", () => {
    it("should disable side menu", () => {
      component.ngOnInit();
      expect(menuCtrlSpy.enable).toHaveBeenCalledWith(false, "menu");
    });

    it("should initialize user credentials", () => {
      component.ngOnInit();
      expect(component.user).toEqual({ email: "", password: "" });
    });
  });
});
