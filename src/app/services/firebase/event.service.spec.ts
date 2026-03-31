import { TestBed } from "@angular/core/testing";
import { EventService } from "./event.service";
import { Firestore } from "@angular/fire/firestore";
import { AuthService } from "../auth.service";
import { Injector } from "@angular/core";

describe("EventService", () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventService,
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
    service = TestBed.inject(EventService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
