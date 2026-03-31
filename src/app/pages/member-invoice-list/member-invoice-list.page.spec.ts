import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemberInvoiceListPage } from "./member-invoice-list.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { ModalController } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

describe("MemberInvoiceListPage", () => {
  let component: MemberInvoiceListPage;
  let fixture: ComponentFixture<MemberInvoiceListPage>;

  beforeEach(async () => {
    const invoiceServiceSpy = jasmine.createSpyObj("InvoiceService", [
      "getInvoicesForMember",
    ]);
    invoiceServiceSpy.getInvoicesForMember.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [MemberInvoiceListPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: InvoiceService, useValue: invoiceServiceSpy },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
            "getTop",
          ]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberInvoiceListPage);
    component = fixture.componentInstance;
    component.user = { uid: "test-user" } as any;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
