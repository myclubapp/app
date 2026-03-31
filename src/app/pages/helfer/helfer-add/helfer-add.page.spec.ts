import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HelferAddPage } from "./helfer-add.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

describe("HelferAddPage", () => {
  let component: HelferAddPage;
  let fixture: ComponentFixture<HelferAddPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [HelferAddPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: EventService,
          useValue: jasmine.createSpyObj("EventService", [
            "setCreateHelferEvent",
          ]),
        },
        {
          provide: ChampionshipService,
          useValue: jasmine.createSpyObj("ChampionshipService", [
            "getClubGamesRef",
          ]),
        },
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

    fixture = TestBed.createComponent(HelferAddPage);
    component = fixture.componentInstance;
    // Prevent ngOnDestroy from failing on undefined subscription
    component["subscription"] = { unsubscribe: () => {} } as any;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
