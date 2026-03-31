import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NewsPage } from "./news.page";
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { NewsService } from "src/app/services/firebase/news.service";
import { NotificationService } from "src/app/services/firebase/notification.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import {
  ModalController,
  MenuController,
  AlertController,
  ToastController,
  AnimationController,
} from "@ionic/angular";

describe("NewsPage", () => {
  let component: NewsPage;
  let fixture: ComponentFixture<NewsPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
      "getClubList",
      "getUserClubRefs",
      "getClubRef",
      "getClubTeamsRef",
      "isClubAdmin",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));
    fbServiceSpy.getClubList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [NewsPage],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: NewsService,
          useValue: jasmine.createSpyObj("NewsService", [
            "getClubNewsRef",
            "getNewsRef",
          ]),
        },
        {
          provide: NotificationService,
          useValue: jasmine.createSpyObj("NotificationService", [
            "getNotifications",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getChildren",
            "getUserProfileById",
          ]),
        },
        {
          provide: ChampionshipService,
          useValue: jasmine.createSpyObj("ChampionshipService", [
            "getClubGamesRef",
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
          provide: MenuController,
          useValue: jasmine.createSpyObj("MenuController", ["enable"]),
        },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
        {
          provide: AnimationController,
          useValue: jasmine.createSpyObj("AnimationController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
