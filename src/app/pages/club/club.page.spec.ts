import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubPage } from "./club.page";
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

describe("ClubPage", () => {
  let component: ClubPage;
  let fixture: ComponentFixture<ClubPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
      "getClubRef",
      "getClubMemberRefs",
      "getClubAdminRefs",
      "getClubRequestRefs",
      "getClubTeamRefs",
      "getClubParentsRefs",
      "isClubAdmin",
      "setClubThreshold",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));
    fbServiceSpy.getClubRef.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [ClubPage],
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

    fixture = TestBed.createComponent(ClubPage);
    component = fixture.componentInstance;
    component.data = { id: "test-club" };
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
