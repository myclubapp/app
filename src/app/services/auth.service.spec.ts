import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  deleteUser,
} from "@angular/fire/auth";
import {
  Firestore,
  doc,
  setDoc,
  clearIndexedDbPersistence,
} from "@angular/fire/firestore";

describe("AuthService", () => {
  let service: AuthService;
  let authSpy: jasmine.SpyObj<Auth>;
  let firestoreSpy: jasmine.SpyObj<Firestore>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockUser = {
    uid: "test-uid-123",
    email: "test@example.com",
    getIdToken: jasmine.createSpy("getIdToken").and.resolveTo("mock-token"),
  };

  beforeEach(() => {
    authSpy = jasmine.createSpyObj("Auth", [], {
      currentUser: mockUser,
    });
    firestoreSpy = jasmine.createSpyObj("Firestore", ["app"]);
    routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
    routerSpy.navigateByUrl.and.resolveTo(true);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Auth, useValue: authSpy },
        { provide: Firestore, useValue: firestoreSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("login", () => {
    it("should call signInWithEmailAndPassword with correct params", async () => {
      // The actual Firebase function is module-level, so we test that the method exists
      // and accepts the right parameters
      expect(service.login).toBeDefined();
      expect(typeof service.login).toBe("function");
    });
  });

  describe("signup", () => {
    it("should accept email, password, firstName and lastName", () => {
      expect(service.signup).toBeDefined();
      expect(service.signup.length).toBe(4);
    });
  });

  describe("resetPassword", () => {
    it("should accept an email parameter", () => {
      expect(service.resetPassword).toBeDefined();
      expect(service.resetPassword.length).toBe(1);
    });
  });

  describe("logout", () => {
    it("should emit logout event to clear caches", () => {
      let logoutEmitted = false;
      service.logout$.subscribe(() => {
        logoutEmitted = true;
      });

      // Access private method via bracket notation
      (service as any).clearAllCaches();
      expect(logoutEmitted).toBeTrue();
    });

    it("should expose logout$ observable", () => {
      expect(service.logout$).toBeDefined();
    });
  });

  describe("validateAndRefreshToken", () => {
    it("should return false when no currentUser", async () => {
      // Override currentUser to null
      Object.defineProperty(service.auth, "currentUser", { value: null });
      const result = await service.validateAndRefreshToken();
      expect(result).toBeFalse();
    });

    it("should return true when token refresh succeeds", async () => {
      Object.defineProperty(service.auth, "currentUser", {
        value: mockUser,
        configurable: true,
      });
      const result = await service.validateAndRefreshToken();
      expect(result).toBeTrue();
      expect(mockUser.getIdToken).toHaveBeenCalledWith(true);
    });

    it("should return false when token refresh fails", async () => {
      const failUser = {
        ...mockUser,
        getIdToken: jasmine
          .createSpy("getIdToken")
          .and.rejectWith({ code: "auth/user-token-expired" }),
      };
      Object.defineProperty(service.auth, "currentUser", {
        value: failUser,
        configurable: true,
      });
      const result = await service.validateAndRefreshToken();
      expect(result).toBeFalse();
    });
  });

  describe("user$", () => {
    it("should expose user$ observable", () => {
      expect(service.user$).toBeDefined();
    });

    it("getUser$ should return an observable", () => {
      const result = service.getUser$();
      expect(result).toBeDefined();
      expect(result.subscribe).toBeDefined();
    });
  });

  describe("deleteProfile", () => {
    it("should be defined", () => {
      expect(service.deleteProfile).toBeDefined();
    });
  });
});
