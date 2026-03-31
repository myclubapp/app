import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChampionshipPage } from "./championship.page";
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";
import { SwissUnihockeyService } from "src/app/services/swiss-unihockey.service";
import {
  ModalController,
  MenuController,
  AlertController,
  ToastController,
  NavController,
} from "@ionic/angular";

describe("ChampionshipPage", () => {
  let component: ChampionshipPage;
  let fixture: ComponentFixture<ChampionshipPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
      "getTeamAdminList",
      "getUserTeamRefs",
      "getTeamMemberRefs",
      "getTeamRef",
      "isTeamAdmin",
      "isClubAdmin",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ChampionshipPage],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: ChampionshipService,
          useValue: jasmine.createSpyObj("ChampionshipService", [
            "getTeamGamesRef",
            "getTeamGamesPastRef",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", ["getChildren"]),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", [
            "showSuccessToast",
            "showErrorToast",
            "showActionSheet",
          ]),
        },
        {
          provide: SwissUnihockeyService,
          useValue: jasmine.createSpyObj("SwissUnihockeyService", [
            "getTeamRankings",
            "getCurrentSeason",
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
          provide: MenuController,
          useValue: jasmine.createSpyObj("MenuController", ["enable"]),
        },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
        {
          provide: NavController,
          useValue: jasmine.createSpyObj("NavController", ["navigateForward"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionshipPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
