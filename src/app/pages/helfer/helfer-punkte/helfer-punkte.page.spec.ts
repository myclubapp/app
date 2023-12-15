import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HelferPunktePage } from "./helfer-punkte.page";

describe("HelferPunktePage", () => {
  let component: HelferPunktePage;
  let fixture: ComponentFixture<HelferPunktePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelferPunktePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
