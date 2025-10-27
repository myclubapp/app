import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CreateNewsPage } from "./create-news.page";

describe("CreateNewsPage", () => {
  let component: CreateNewsPage;
  let fixture: ComponentFixture<CreateNewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
