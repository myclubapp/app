import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChampionshipCreatePage } from "./championship-create.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";

describe("ChampionshipCreatePage", () => {
  let component: ChampionshipCreatePage;
  let fixture: ComponentFixture<ChampionshipCreatePage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamAdminList",
    ]);
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ChampionshipCreatePage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj("AuthService", ["getUser$"]),
        },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: ChampionshipService,
          useValue: jasmine.createSpyObj("ChampionshipService", [
            "setCreateGame",
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

    fixture = TestBed.createComponent(ChampionshipCreatePage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
