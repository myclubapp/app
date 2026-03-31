import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NotFoundPage } from "./not-found.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

describe("NotFoundPage", () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
