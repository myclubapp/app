import { TestBed } from "@angular/core/testing";
import { NotificationService } from "./notification.service";
import { Firestore } from "@angular/fire/firestore";
import { AuthService } from "../auth.service";
import { Injector } from "@angular/core";

describe("NotificationService", () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        { provide: Firestore, useValue: {} },
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj("AuthService", ["getUser$"]),
        },
        {
          provide: Injector,
          useValue: jasmine.createSpyObj("Injector", ["get"]),
        },
      ],
    });
    service = TestBed.inject(NotificationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
