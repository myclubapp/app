import { TestBed } from "@angular/core/testing";

import { JugendundsportService } from "./jugendundsport.service";

describe("JugendundsportService", () => {
  let service: JugendundsportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugendundsportService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
