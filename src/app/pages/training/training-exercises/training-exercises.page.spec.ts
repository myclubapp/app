import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrainingExercisesPage } from "./training-exercises.page";

describe("TrainingExercisesPage", () => {
  let component: TrainingExercisesPage;
  let fixture: ComponentFixture<TrainingExercisesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainingExercisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
