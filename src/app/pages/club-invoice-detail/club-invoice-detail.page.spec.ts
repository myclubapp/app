import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubInvoiceDetailPage } from "./club-invoice-detail.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  ToastController,
  AlertController,
} from "@ionic/angular";
import { DomSanitizer } from "@angular/platform-browser";

describe("ClubInvoiceDetailPage", () => {
  let component: ClubInvoiceDetailPage;
  let fixture: ComponentFixture<ClubInvoiceDetailPage>;

  beforeEach(async () => {
    const invoiceServiceSpy = jasmine.createSpyObj("InvoiceService", [
      "getInvoice",
      "updateInvoiceStatus",
      "updateInvoice",
      "deleteInvoice",
      "sendInvoiceReminder",
    ]);
    invoiceServiceSpy.getInvoice.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [ClubInvoiceDetailPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: InvoiceService, useValue: invoiceServiceSpy },
        {
          provide: FirebaseService,
          useValue: jasmine.createSpyObj("FirebaseService", ["getClubRef"]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfileById",
          ]),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", [
            "showSuccessToast",
            "showErrorToast",
            "showConfirmDialog",
            "showInfoDialog",
            "showClipboardSuccessToast",
          ]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
            "getTop",
          ]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: DomSanitizer,
          useValue: jasmine.createSpyObj("DomSanitizer", [
            "bypassSecurityTrustHtml",
          ]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubInvoiceDetailPage);
    component = fixture.componentInstance;
    component.clubId = "test-club";
    component.periodId = "test-period";
    component.invoiceId = "test-invoice";
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
