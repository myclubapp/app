import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TeamMemberListPage } from "./team-member-list.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { ExportService } from "src/app/services/export.service";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";

describe("TeamMemberListPage", () => {
  let component: TeamMemberListPage;
  let fixture: ComponentFixture<TeamMemberListPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamRef",
      "getTeamMemberRefs",
      "getTeamAdminList",
      "getClubAdminList",
      "getClubMemberRefs",
      "isTeamAdmin",
      "isClubAdmin",
      "addTeamRole",
      "addTeamMemberRole",
      "deleteTeamMember",
      "approveUserTeamRequest",
    ]);
    fbServiceSpy.getTeamRef.and.returnValue(of({}));
    fbServiceSpy.getTeamMemberRefs.and.returnValue(of([]));
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [TeamMemberListPage],
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
          provide: ExportService,
          useValue: jasmine.createSpyObj("ExportService", ["exportMembers"]),
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
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMemberListPage);
    component = fixture.componentInstance;
    component.team = { id: "test-team", clubId: "test-club", roles: [] };
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
