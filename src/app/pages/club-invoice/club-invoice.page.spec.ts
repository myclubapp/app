import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubInvoicePage } from "./club-invoice.page";

describe("ClubInvoicePage", () => {
  let component: ClubInvoicePage;
  let fixture: ComponentFixture<ClubInvoicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
