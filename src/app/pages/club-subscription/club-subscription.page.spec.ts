import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubSubscriptionPage } from "./club-subscription.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import {
  ModalController,
  AlertController,
  LoadingController,
  ToastController,
} from "@ionic/angular";

describe("ClubSubscriptionPage", () => {
  let component: ClubSubscriptionPage;
  let fixture: ComponentFixture<ClubSubscriptionPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubRef",
      "getClubMemberRefs",
      "getClubSubscriptionList",
      "getProducts",
      "getModules",
      "getPrices",
      "getProduct",
      "getClubSubscriptionInvoiceList",
      "checkoutSubscription",
      "checkoutAddon",
      "getCheckoutSession",
    ]);
    fbServiceSpy.getClubRef.and.returnValue(of({}));
    fbServiceSpy.getClubMemberRefs.and.returnValue(of([]));
    fbServiceSpy.getProducts.and.returnValue(of([]));
    fbServiceSpy.getModules.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ClubSubscriptionPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj("AuthService", ["getUser$"]),
        },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfileById",
          ]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
          ]),
        },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: LoadingController,
          useValue: jasmine.createSpyObj("LoadingController", ["create"]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubSubscriptionPage);
    component = fixture.componentInstance;
    component.clubId = "test-club";
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
