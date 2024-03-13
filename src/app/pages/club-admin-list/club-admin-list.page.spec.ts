import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubAdminListPage } from './club-admin-list.page';

describe('ClubAdminListPage', () => {
  let component: ClubAdminListPage;
  let fixture: ComponentFixture<ClubAdminListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClubAdminListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
