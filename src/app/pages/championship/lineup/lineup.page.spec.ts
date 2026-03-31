import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LineupPage } from "./lineup.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { ModalController } from "@ionic/angular";

describe("LineupPage", () => {
  let component: LineupPage;
  let fixture: ComponentFixture<LineupPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [LineupPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LineupPage);
    component = fixture.componentInstance;
    component.data = {
      id: "test-game",
      teamId: "test-team",
      teamRef: { id: "test-team" },
    } as any;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
