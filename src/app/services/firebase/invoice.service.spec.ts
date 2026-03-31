import { TestBed } from "@angular/core/testing";
import { InvoiceService } from "./invoice.service";
import { Firestore } from "@angular/fire/firestore";
import { AuthService } from "../auth.service";
import { Injector } from "@angular/core";

describe("InvoiceService", () => {
  let service: InvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InvoiceService,
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
    service = TestBed.inject(InvoiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
