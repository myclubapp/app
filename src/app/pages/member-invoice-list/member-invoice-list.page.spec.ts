import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemberInvoiceListPage } from "./member-invoice-list.page";

describe("MemberInvoiceListPage", () => {
  let component: MemberInvoiceListPage;
  let fixture: ComponentFixture<MemberInvoiceListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberInvoiceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
