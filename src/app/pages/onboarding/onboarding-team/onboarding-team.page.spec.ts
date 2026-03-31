import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OnboardingTeamPage } from "./onboarding-team.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

describe("OnboardingTeamPage", () => {
  let component: OnboardingTeamPage;
  let fixture: ComponentFixture<OnboardingTeamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnboardingTeamPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingTeamPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
