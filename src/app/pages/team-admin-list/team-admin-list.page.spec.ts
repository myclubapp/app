import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TeamAdminListPage } from "./team-admin-list.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";

describe("TeamAdminListPage", () => {
  let component: TeamAdminListPage;
  let fixture: ComponentFixture<TeamAdminListPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamRef",
      "getTeamAdminRefs",
      "getTeamAdminList",
      "getClubAdminList",
      "getTeamMemberRefs",
      "isTeamAdmin",
      "isClubAdmin",
      "addTeamAdmin",
      "deleteTeamAdmin",
    ]);
    fbServiceSpy.getTeamRef.and.returnValue(of({}));
    fbServiceSpy.getTeamAdminRefs.and.returnValue(of([]));
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [TeamAdminListPage],
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

    fixture = TestBed.createComponent(TeamAdminListPage);
    component = fixture.componentInstance;
    component.team = { id: "test-team", clubId: "test-club", roles: [] };
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
