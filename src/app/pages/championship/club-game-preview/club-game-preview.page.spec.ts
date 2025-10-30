import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubGamePreviewPage } from "./club-game-preview.page";

describe("ClubGamePreviewPage", () => {
  let component: ClubGamePreviewPage;
  let fixture: ComponentFixture<ClubGamePreviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubGamePreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
