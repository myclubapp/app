import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubListPage } from "./club-list.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { ModalController } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

describe("ClubListPage", () => {
  let component: ClubListPage;
  let fixture: ComponentFixture<ClubListPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubList",
      "getClubRef",
      "getClubLinksShowOnCard",
    ]);
    fbServiceSpy.getClubList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ClubListPage],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubListPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
