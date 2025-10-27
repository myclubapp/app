import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubLinksPage } from "./club-links.page";

describe("ClubLinksPage", () => {
  let component: ClubLinksPage;
  let fixture: ComponentFixture<ClubLinksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubLinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
