import { TestBed } from "@angular/core/testing";
import { FirebaseService } from "./firebase.service";
import { Firestore } from "@angular/fire/firestore";
import { Storage } from "@angular/fire/storage";
import { AuthService } from "./auth.service";
import { UserProfileService } from "./firebase/user-profile.service";
import { Injector } from "@angular/core";
import { of } from "rxjs";

describe("FirebaseService", () => {
  let service: FirebaseService;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"], {
      logout$: of(),
    });

    TestBed.configureTestingModule({
      providers: [
        FirebaseService,
        { provide: Firestore, useValue: {} },
        { provide: Storage, useValue: {} },
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfile",
          ]),
        },
        {
          provide: Injector,
          useValue: jasmine.createSpyObj("Injector", ["get"]),
        },
      ],
    });
    service = TestBed.inject(FirebaseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
