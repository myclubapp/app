import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InfoPage } from "./info.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { TranslateModule } from "@ngx-translate/core";

describe("InfoPage", () => {
  let component: InfoPage;
  let fixture: ComponentFixture<InfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: SwUpdate,
          useValue: jasmine.createSpyObj("SwUpdate", [
            "checkForUpdate",
            "activateUpdate",
          ]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
