import { ComponentFixture, TestBed } from "@angular/core/testing";
import { QrInvoiceModalPage } from "./qr-invoice-modal.page";

describe("QrInvoiceModalPage", () => {
  let component: QrInvoiceModalPage;
  let fixture: ComponentFixture<QrInvoiceModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrInvoiceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
