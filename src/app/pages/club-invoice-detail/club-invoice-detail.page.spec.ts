import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubInvoiceDetailPage } from "./club-invoice-detail.page";

describe("ClubInvoiceDetailPage", () => {
  let component: ClubInvoiceDetailPage;
  let fixture: ComponentFixture<ClubInvoiceDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubInvoiceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
