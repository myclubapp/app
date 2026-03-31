import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubBillingPeriodPage } from "./club-billing-period.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { InvoiceService } from "src/app/services/firebase/invoice.service";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";

describe("ClubBillingPeriodPage", () => {
  let component: ClubBillingPeriodPage;
  let fixture: ComponentFixture<ClubBillingPeriodPage>;

  beforeEach(async () => {
    const invoiceServiceSpy = jasmine.createSpyObj("InvoiceService", [
      "getPeriods",
      "createPeriod",
      "updatePeriod",
      "deletePeriod",
    ]);
    invoiceServiceSpy.getPeriods.and.returnValue(of([]));
    const authServiceSpy = jasmine.createSpyObj("AuthService", {
      auth: { currentUser: { uid: "test" } },
    });
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamsByClubId",
      "setClubCreditor",
      "setTeamThreshold",
      "setClubSurcharges",
    ]);
    fbServiceSpy.getTeamsByClubId.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ClubBillingPeriodPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: InvoiceService, useValue: invoiceServiceSpy },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", [
            "showSuccessToast",
            "showErrorToast",
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

    fixture = TestBed.createComponent(ClubBillingPeriodPage);
    component = fixture.componentInstance;
    component.club = { id: "test-club" } as any;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
