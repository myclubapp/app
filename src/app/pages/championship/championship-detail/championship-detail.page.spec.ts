import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChampionshipDetailPage } from "./championship-detail.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { firstValueFrom, of } from "rxjs";
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
  let fbServiceSpy: jasmine.SpyObj<FirebaseService>;
  let championshipServiceSpy: jasmine.SpyObj<ChampionshipService>;
  let userProfileServiceSpy: jasmine.SpyObj<UserProfileService>;

  const mockUser = { uid: "user-1" };
  const mockGame = { id: "test-game", teamId: "test-team" };
  const teamMembers = [
    { id: "user-1", roles: ["captain"] },
    { id: "member-2", roles: [] },
  ];

  beforeEach(async () => {
    fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamAdminList",
      "getTeamMemberRefs",
      "getTeamRef",
      "isTeamAdmin",
    ]);
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));
    fbServiceSpy.getTeamRef.and.returnValue(
      of({ id: "test-team", name: "Team" } as any),
    );
    fbServiceSpy.getTeamMemberRefs.and.returnValue(of(teamMembers as any));

    const authServiceSpy = jasmine.createSpyObj("AuthService", [
      "getUser$",
      "getAuthenticatedUser$",
    ]);
    authServiceSpy.getUser$.and.returnValue(of(mockUser));
    authServiceSpy.getAuthenticatedUser$.and.returnValue(of(mockUser));

    championshipServiceSpy = jasmine.createSpyObj("ChampionshipService", [
      "getTeamGameRef",
      "getTeamGameAttendeesRef",
    ]);
    championshipServiceSpy.getTeamGameRef.and.returnValue(of(mockGame as any));
    championshipServiceSpy.getTeamGameAttendeesRef.and.returnValue(
      of([{ id: "user-1", status: true }] as any),
    );

    userProfileServiceSpy = jasmine.createSpyObj("UserProfileService", [
      "getUserProfileById",
      "getMemberProfiles",
      "getChildren",
    ]);
    userProfileServiceSpy.getChildren.and.returnValue(of([]));
    // Same contract as the service: every member comes back with a name.
    userProfileServiceSpy.getMemberProfiles.and.callFake((members: any[]) =>
      of(
        members.map((member) => ({
          ...member,
          firstName: "N-" + member.id,
          lastName: "L",
        })),
      ),
    );

    await TestBed.configureTestingModule({
      declarations: [ChampionshipDetailPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        { provide: ChampionshipService, useValue: championshipServiceSpy },
        { provide: UserProfileService, useValue: userProfileServiceSpy },
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
    component.data = mockGame as any;
    component.isFuture = true;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("game$", () => {
    it("resolves attendees and open members through one batched profile read", async () => {
      await component.ngOnInit();
      const game = (await firstValueFrom(component.game$)) as any;

      expect(userProfileServiceSpy.getMemberProfiles).toHaveBeenCalledTimes(1);
      expect(
        userProfileServiceSpy.getMemberProfiles.calls.argsFor(0)[0],
      ).toEqual(teamMembers as any);
      expect(userProfileServiceSpy.getUserProfileById).not.toHaveBeenCalled();

      expect(game.attendeeListTrue.map((att) => att.id)).toEqual(["user-1"]);
      expect(game.attendeeListTrue[0].firstName).toBe("N-user-1");
      // Team roles come from the member document.
      expect(game.attendeeListTrue[0].roles).toEqual(["captain"]);
      expect(game.attendeeListFalse).toEqual([]);
      expect(game.unrespondedMembers.map((member) => member.id)).toEqual([
        "member-2",
      ]);
      expect(game.unrespondedMembers[0].status).toBeNull();
      // The signed-in user's own row.
      expect(game.status.length).toBe(1);
      expect(game.status[0].id).toBe("user-1");
      expect(game.status[0].status).toBeTrue();
      expect(game.status[0].firstName).toBe("N-user-1");
    });

    it("resolves a game without team members instead of staying in the loading state", async () => {
      fbServiceSpy.getTeamMemberRefs.and.returnValue(of([]));
      championshipServiceSpy.getTeamGameAttendeesRef.and.returnValue(of([]));

      await component.ngOnInit();
      const game = (await firstValueFrom(component.game$)) as any;

      expect(game.attendeeListTrue).toEqual([]);
      expect(game.unrespondedMembers).toEqual([]);
      expect(game.status).toEqual([]);
    });
  });
});
