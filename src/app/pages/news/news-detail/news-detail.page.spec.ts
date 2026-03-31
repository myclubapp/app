import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NewsDetailPage } from "./news-detail.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { NewsService } from "src/app/services/firebase/news.service";
import { UiService } from "src/app/services/ui.service";
import { ModalController } from "@ionic/angular";

describe("NewsDetailPage", () => {
  let component: NewsDetailPage;
  let fixture: ComponentFixture<NewsDetailPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
      "isClubAdmin",
      "uploadClubNewsImage",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [NewsDetailPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: NewsService,
          useValue: jasmine.createSpyObj("NewsService", [
            "getNewsDetail",
            "getClubNewsDetail",
            "updateClubNews",
            "updateNews",
          ]),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", [
            "showActionSheet",
            "showConfirmDialog",
            "showSuccessToast",
            "showErrorToast",
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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDetailPage);
    component = fixture.componentInstance;
    component.data = {
      id: "1",
      title: "",
      leadText: "",
      text: "",
      date: new Date(),
      url: "",
    } as any;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
