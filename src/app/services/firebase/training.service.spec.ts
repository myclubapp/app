import { TestBed } from "@angular/core/testing";
import { TrainingService } from "./training.service";
import { Firestore } from "@angular/fire/firestore";
import { AuthService } from "../auth.service";
import { Injector } from "@angular/core";

describe("TrainingService", () => {
  let service: TrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TrainingService,
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
    service = TestBed.inject(TrainingService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
