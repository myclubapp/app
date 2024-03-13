import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TeamExercisesPage } from "./team-exercises.page";

describe("TeamExercisesPage", () => {
  let component: TeamExercisesPage;
  let fixture: ComponentFixture<TeamExercisesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamExercisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
