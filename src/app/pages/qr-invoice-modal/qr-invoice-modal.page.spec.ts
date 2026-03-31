import { ComponentFixture, TestBed } from "@angular/core/testing";
import { QrInvoiceModalPage } from "./qr-invoice-modal.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

describe("QrInvoiceModalPage", () => {
  let component: QrInvoiceModalPage;
  let fixture: ComponentFixture<QrInvoiceModalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrInvoiceModalPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", ["dismiss"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QrInvoiceModalPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
