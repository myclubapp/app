import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubLinksPage } from "./club-links.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { ModalController, ToastController } from "@ionic/angular";

describe("ClubLinksPage", () => {
  let component: ClubLinksPage;
  let fixture: ComponentFixture<ClubLinksPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubRef",
      "getClubLinks",
      "getClubAdminList",
      "isClubAdmin",
      "deleteClubLink",
      "updateClubLink",
      "updateLinkOrder",
    ]);
    fbServiceSpy.getClubRef.and.returnValue(of({}));
    fbServiceSpy.getClubLinks.and.returnValue(of([]));
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ClubLinksPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FirebaseService, useValue: fbServiceSpy },
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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubLinksPage);
    component = fixture.componentInstance;
    component.clubId = "test-club";
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
