import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TeamPage } from "./team.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";
import { JugendundsportService } from "src/app/services/jugendundsport.service";
import {
  ModalController,
  AlertController,
  LoadingController,
} from "@ionic/angular";

describe("TeamPage", () => {
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubList",
      "getClubAdminList",
      "getTeamAdminList",
      "getTeamRef",
      "getTeamMemberRefs",
      "getTeamAdminRefs",
      "getTeamRequestRefs",
      "getClubMemberRefs",
      "isClubAdmin",
      "isTeamAdmin",
      "setTeamThreshold",
      "deleteTeam",
      "approveUserTeamRequest",
    ]);
    fbServiceSpy.getClubList.and.returnValue(of([]));
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));
    fbServiceSpy.getTeamRef.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [TeamPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfileById",
          ]),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", [
            "showSuccessToast",
            "showErrorToast",
            "showConfirmDialog",
            "showInfoDialog",
            "showFormDialog",
          ]),
        },
        {
          provide: JugendundsportService,
          useValue: jasmine.createSpyObj("JugendundsportService", [
            "exportTrainingData",
            "exportChampionshipData",
            "exportAttendanceData",
            "exportPersonData",
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
          provide: LoadingController,
          useValue: jasmine.createSpyObj("LoadingController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamPage);
    component = fixture.componentInstance;
    component.data = { id: "test-team", clubId: "test-club" } as any;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
