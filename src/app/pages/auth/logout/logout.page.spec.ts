import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LogoutPage } from "./logout.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

describe("LogoutPage", () => {
  let component: LogoutPage;
  let fixture: ComponentFixture<LogoutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: MenuController,
          useValue: jasmine.createSpyObj("MenuController", ["enable"]),
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LogoutPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
