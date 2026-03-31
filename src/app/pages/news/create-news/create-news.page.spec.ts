import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CreateNewsPage } from "./create-news.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { NewsService } from "src/app/services/firebase/news.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { ModalController } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

describe("CreateNewsPage", () => {
  let component: CreateNewsPage;
  let fixture: ComponentFixture<CreateNewsPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
      "uploadClubNewsImage",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [CreateNewsPage],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: NewsService,
          useValue: jasmine.createSpyObj("NewsService", [
            "createClubNews",
            "updateClubNews",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfile",
          ]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
          ]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewsPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
