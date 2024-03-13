import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamAdminListPage } from './team-admin-list.page';

describe('TeamAdminListPage', () => {
  let component: TeamAdminListPage;
  let fixture: ComponentFixture<TeamAdminListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamAdminListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
