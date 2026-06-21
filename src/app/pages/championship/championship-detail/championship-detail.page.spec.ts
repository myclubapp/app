import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChampionshipDetailPage } from "./championship-detail.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";
import { MapService } from "src/app/services/map.service";
import { ModalController, AlertController, Platform } from "@ionic/angular";

describe("ChampionshipDetailPage", () => {
  let component: ChampionshipDetailPage;
  let fixture: ComponentFixture<ChampionshipDetailPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamAdminList",
      "getTeamMemberRefs",
      "isTeamAdmin",
    ]);
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [ChampionshipDetailPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: ChampionshipService,
          useValue: jasmine.createSpyObj("ChampionshipService", [
            "getTeamGameRef",
            "getTeamGameAttendeesRef",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfileById",
            "getChildren",
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
          provide: MapService,
          useValue: jasmine.createSpyObj("MapService", [
            "checkGeolocationPermission",
            "getCurrentPosition",
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
          provide: Platform,
          useValue: jasmine.createSpyObj("Platform", ["is"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionshipDetailPage);
    component = fixture.componentInstance;
    component.data = { id: "test-game", teamId: "test-team" } as any;
    component.isFuture = true;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
