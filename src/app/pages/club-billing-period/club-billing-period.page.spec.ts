import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubBillingPeriodPage } from "./club-billing-period.page";

describe("ClubBillingPeriodPage", () => {
  let component: ClubBillingPeriodPage;
  let fixture: ComponentFixture<ClubBillingPeriodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubBillingPeriodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
