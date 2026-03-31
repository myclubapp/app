import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TabsPage } from "./tabs.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import {
  MenuController,
  NavController,
  AnimationController,
} from "@ionic/angular";
import { Analytics } from "@angular/fire/analytics";
import { TranslateModule } from "@ngx-translate/core";

describe("TabsPage", () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubList",
    ]);
    fbServiceSpy.getClubList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [TabsPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: MenuController,
          useValue: jasmine.createSpyObj("MenuController", ["enable"]),
        },
        {
          provide: NavController,
          useValue: jasmine.createSpyObj("NavController", ["navigateForward"]),
        },
        {
          provide: AnimationController,
          useValue: jasmine.createSpyObj("AnimationController", ["create"]),
        },
        {
          provide: Analytics,
          useValue: jasmine.createSpyObj("Analytics", ["logEvent"]),
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
