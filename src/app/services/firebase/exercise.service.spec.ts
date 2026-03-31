import { TestBed } from "@angular/core/testing";
import { ExerciseService } from "./exercise.service";
import { Firestore } from "@angular/fire/firestore";
import { Injector } from "@angular/core";

describe("ExerciseService", () => {
  let service: ExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExerciseService,
        { provide: Firestore, useValue: {} },
        {
          provide: Injector,
          useValue: jasmine.createSpyObj("Injector", ["get"]),
        },
      ],
    });
    service = TestBed.inject(ExerciseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
