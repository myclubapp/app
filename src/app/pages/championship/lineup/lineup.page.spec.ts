import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LineupPage } from "./lineup.page";

describe("LineupPage", () => {
  let component: LineupPage;
  let fixture: ComponentFixture<LineupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LineupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
