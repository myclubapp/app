import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubTeamListPage } from "./club-team-list.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  ToastController,
  AlertController,
} from "@ionic/angular";

describe("ClubTeamListPage", () => {
  let component: ClubTeamListPage;
  let fixture: ComponentFixture<ClubTeamListPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubTeamList",
      "getClubRef",
      "getClubAdminList",
      "isClubAdmin",
      "addClubTeam",
    ]);
    fbServiceSpy.getClubTeamList.and.returnValue(of([]));
    fbServiceSpy.getClubRef.and.returnValue(of({}));
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ClubTeamListPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", [
            "showSuccessToast",
            "showErrorToast",
            "showConfirmDialog",
            "showInfoDialog",
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
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubTeamListPage);
    component = fixture.componentInstance;
    component.clubId = "test-club";
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
