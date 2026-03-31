import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubInvoicePage } from "./club-invoice.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";

describe("ClubInvoicePage", () => {
  let component: ClubInvoicePage;
  let fixture: ComponentFixture<ClubInvoicePage>;

  beforeEach(async () => {
    const invoiceServiceSpy = jasmine.createSpyObj("InvoiceService", [
      "getInvoicesForPeriod",
      "generateInvoiceForMember",
      "updateInvoiceStatus",
      "updateInvoice",
      "sendInvoiceReminder",
    ]);
    invoiceServiceSpy.getInvoicesForPeriod.and.returnValue(of([]));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubMemberRefs",
      "getClubTeamList",
      "getTeamMemberRefs",
    ]);
    fbServiceSpy.getClubMemberRefs.and.returnValue(of([]));
    fbServiceSpy.getClubTeamList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ClubInvoicePage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: InvoiceService, useValue: invoiceServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
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
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubInvoicePage);
    component = fixture.componentInstance;
    component.club = { id: "test-club" } as any;
    component.period = { id: "test-period", referenceId: "123456" };
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
