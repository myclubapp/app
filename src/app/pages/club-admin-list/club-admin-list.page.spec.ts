import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubAdminListPage } from "./club-admin-list.page";
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

describe("ClubAdminListPage", () => {
  let component: ClubAdminListPage;
  let fixture: ComponentFixture<ClubAdminListPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubRef",
      "getClubAdminRefs",
      "getClubAdminList",
      "getClubMemberRefs",
      "isClubAdmin",
      "addClubAdmin",
      "deleteClubAdmin",
    ]);
    fbServiceSpy.getClubRef.and.returnValue(of({}));
    fbServiceSpy.getClubAdminRefs.and.returnValue(of([]));
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ClubAdminListPage],
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

    fixture = TestBed.createComponent(ClubAdminListPage);
    component = fixture.componentInstance;
    component.club = { id: "test-club", roles: [] };
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
