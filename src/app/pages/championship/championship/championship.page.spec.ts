import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChampionshipPage } from "./championship.page";
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { lastValueFrom, of } from "rxjs";
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
    const authServiceSpy = jasmine.createSpyObj("AuthService", [
      "getUser$",
      "getAuthenticatedUser$",
    ]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    authServiceSpy.getAuthenticatedUser$.and.returnValue(of(null));
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
            "setTeamGameAttendeeStatus",
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
            "showInfoDialog",
            "showConfirmDialog",
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

  it("offers registering and unregistering for all games", async () => {
    const uiService = TestBed.inject(UiService) as jasmine.SpyObj<UiService>;
    uiService.showActionSheet.and.resolveTo(undefined as any);

    await component.gameListActions();

    const options = uiService.showActionSheet.calls.mostRecent().args[0] as any;
    expect(options.buttons.map((button) => button.text)).toEqual([
      "common.alle_anmelden",
      "common.alle_abmelden",
      "common.cancel",
    ]);
  });

  describe("toggleAllGames", () => {
    const inDays = (days: number) => ({
      toDate: () => new Date(Date.now() + days * 24 * 60 * 60 * 1000),
    });
    let championshipService: jasmine.SpyObj<ChampionshipService>;
    let uiService: jasmine.SpyObj<UiService>;

    beforeEach(() => {
      championshipService = TestBed.inject(
        ChampionshipService,
      ) as jasmine.SpyObj<ChampionshipService>;
      uiService = TestBed.inject(UiService) as jasmine.SpyObj<UiService>;
      championshipService.setTeamGameAttendeeStatus.and.resolveTo();
      uiService.showSuccessToast.and.resolveTo();
      uiService.showInfoDialog.and.resolveTo();
      uiService.showConfirmDialog.and.resolveTo(true);

      component.gameList$ = of([
        // Frist 24h, Spiel heute 00:00 Uhr -> Abmeldefrist abgelaufen
        {
          id: "g-late",
          teamId: "team-1",
          dateTime: inDays(0),
          time: "00:00",
          team: { championshipThreshold: 24 },
        },
        // Frist 24h, Spiel in 10 Tagen -> Abmelden möglich
        {
          id: "g-ok",
          teamId: "team-1",
          dateTime: inDays(10),
          time: "14:30",
          team: { championshipThreshold: 24 },
        },
        // Keine Frist -> Abmelden immer möglich
        {
          id: "g-no-threshold",
          teamId: "team-2",
          dateTime: inDays(0),
          time: "00:00",
          team: {},
        },
      ] as any);
    });

    it("registers for every upcoming game", async () => {
      await component.toggleAllGames(true);

      expect(
        championshipService.setTeamGameAttendeeStatus,
      ).toHaveBeenCalledTimes(3);
      expect(
        championshipService.setTeamGameAttendeeStatus,
      ).toHaveBeenCalledWith(true, "team-1", "g-late");
      expect(uiService.showSuccessToast).toHaveBeenCalled();
      expect(uiService.showInfoDialog).not.toHaveBeenCalled();
    });

    it("skips games past the unsubscribe deadline and informs the user", async () => {
      await component.toggleAllGames(false);

      expect(
        championshipService.setTeamGameAttendeeStatus,
      ).toHaveBeenCalledTimes(2);
      expect(
        championshipService.setTeamGameAttendeeStatus,
      ).toHaveBeenCalledWith(false, "team-1", "g-ok");
      expect(
        championshipService.setTeamGameAttendeeStatus,
      ).toHaveBeenCalledWith(false, "team-2", "g-no-threshold");
      expect(uiService.showSuccessToast).toHaveBeenCalled();
      expect(uiService.showInfoDialog).toHaveBeenCalledTimes(1);
    });

    it("shows no success toast when every item is past the deadline", async () => {
      component.gameList$ = of([
        {
          id: "g-late",
          teamId: "team-1",
          dateTime: inDays(0),
          time: "00:00",
          team: { championshipThreshold: 24 },
        },
      ] as any);

      await component.toggleAllGames(false);

      expect(
        championshipService.setTeamGameAttendeeStatus,
      ).not.toHaveBeenCalled();
      expect(uiService.showSuccessToast).not.toHaveBeenCalled();
      expect(uiService.showInfoDialog).toHaveBeenCalledTimes(1);
    });

    it("asks for confirmation with the affected count and stops when cancelled", async () => {
      const translate = TestBed.inject(TranslateService);
      translate.setTranslation("de", {
        championship: { alle_abmelden__confirm: "{{count}} Spiele abmelden?" },
      });
      await lastValueFrom(translate.use("de"));
      uiService.showConfirmDialog.and.resolveTo(false);

      await component.toggleAllGames(false);

      // Kein jasmine.objectContaining: das von karma-jasmine gebündelte jasmine-core 3.99 wirft
      // dafür in toHaveBeenCalledWith "ReferenceError: i is not defined".
      const options = uiService.showConfirmDialog.calls.mostRecent().args[0];
      expect(options.header).toBe("common.alle_abmelden");
      expect(options.message).toBe("3 Spiele abmelden?");
      expect(options.confirmText).toBe("common.abmelden");
      expect(
        championshipService.setTeamGameAttendeeStatus,
      ).not.toHaveBeenCalled();
      expect(uiService.showSuccessToast).not.toHaveBeenCalled();
    });
  });
});
