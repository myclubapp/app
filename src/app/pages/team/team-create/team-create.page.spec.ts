import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TeamCreatePage } from "./team-create.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("TeamCreatePage", () => {
  let component: TeamCreatePage;
  let fixture: ComponentFixture<TeamCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamCreatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamCreatePage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
