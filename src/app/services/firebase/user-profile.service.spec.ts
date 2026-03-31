import { TestBed } from "@angular/core/testing";
import { UserProfileService } from "./user-profile.service";
import { Firestore } from "@angular/fire/firestore";
import { Storage } from "@angular/fire/storage";
import { AuthService } from "../auth.service";
import { Injector } from "@angular/core";
import { of } from "rxjs";

describe("UserProfileService", () => {
  let service: UserProfileService;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"], {
      logout$: of(),
    });

    TestBed.configureTestingModule({
      providers: [
        UserProfileService,
        { provide: Firestore, useValue: {} },
        { provide: Storage, useValue: {} },
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: Injector,
          useValue: jasmine.createSpyObj("Injector", ["get"]),
        },
      ],
    });
    service = TestBed.inject(UserProfileService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
