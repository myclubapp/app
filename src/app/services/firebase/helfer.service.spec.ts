import { TestBed } from "@angular/core/testing";
import { HelferService } from "./helfer.service";
import { Firestore } from "@angular/fire/firestore";
import { AuthService } from "../auth.service";
import { Injector } from "@angular/core";

describe("HelferService", () => {
  let service: HelferService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HelferService,
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
    service = TestBed.inject(HelferService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
