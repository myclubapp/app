import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ClubLinksEditPage } from "./club-links-edit.page";

describe("ClubLinksEditPage", () => {
  let component: ClubLinksEditPage;
  let fixture: ComponentFixture<ClubLinksEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubLinksEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
