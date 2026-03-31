import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FollowPage } from "./follow.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

describe("FollowPage", () => {
  let component: FollowPage;
  let fixture: ComponentFixture<FollowPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
