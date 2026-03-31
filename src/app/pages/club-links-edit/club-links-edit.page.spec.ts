import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubLinksEditPage } from "./club-links-edit.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { UiService } from "src/app/services/ui.service";
import { ModalController, ToastController } from "@ionic/angular";

describe("ClubLinksEditPage", () => {
  let component: ClubLinksEditPage;
  let fixture: ComponentFixture<ClubLinksEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubLinksEditPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: FirebaseService,
          useValue: jasmine.createSpyObj("FirebaseService", [
            "updateClubLink",
            "uploadClubLinkFile",
          ]),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", ["showConfirmDialog"]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
          ]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubLinksEditPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
