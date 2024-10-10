import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubRequestListPage } from './club-request-list.page';

describe('ClubRequestListPage', () => {
  let component: ClubRequestListPage;
  let fixture: ComponentFixture<ClubRequestListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubRequestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
