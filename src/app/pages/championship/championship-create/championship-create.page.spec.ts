import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChampionshipCreatePage } from "./championship-create.page";

describe("ChampionshipCreatePage", () => {
  let component: ChampionshipCreatePage;
  let fixture: ComponentFixture<ChampionshipCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
