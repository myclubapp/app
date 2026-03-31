import { TestBed } from "@angular/core/testing";
import { ChampionshipService } from "./championship.service";
import { Firestore } from "@angular/fire/firestore";
import { AuthService } from "../auth.service";
import { Injector } from "@angular/core";

describe("ChampionshipService", () => {
  let service: ChampionshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChampionshipService,
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
    service = TestBed.inject(ChampionshipService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
