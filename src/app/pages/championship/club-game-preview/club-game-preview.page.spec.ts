import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubGamePreviewPage } from "./club-game-preview.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { UiService } from "src/app/services/ui.service";
import { MapService } from "src/app/services/map.service";
import { ModalController, Platform } from "@ionic/angular";

describe("ClubGamePreviewPage", () => {
  let component: ClubGamePreviewPage;
  let fixture: ComponentFixture<ClubGamePreviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubGamePreviewPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: FirebaseService,
          useValue: jasmine.createSpyObj("FirebaseService", ["getClubRef"]),
        },
        {
          provide: ChampionshipService,
          useValue: jasmine.createSpyObj("ChampionshipService", [
            "getClubGameRef",
          ]),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", ["showSuccessToast"]),
        },
        {
          provide: MapService,
          useValue: jasmine.createSpyObj("MapService", [
            "checkGeolocationPermission",
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
          provide: Platform,
          useValue: jasmine.createSpyObj("Platform", ["is"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubGamePreviewPage);
    component = fixture.componentInstance;
    component.data = { id: "test-game", teamId: "test-team" } as any;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
