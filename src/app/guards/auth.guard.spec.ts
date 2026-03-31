import { TestBed } from "@angular/core/testing";
import { AuthGuard } from "./auth.guard";

describe("AuthGuard", () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
