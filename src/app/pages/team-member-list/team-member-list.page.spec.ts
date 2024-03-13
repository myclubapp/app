import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamMemberListPage } from './team-member-list.page';

describe('TeamMemberListPage', () => {
  let component: TeamMemberListPage;
  let fixture: ComponentFixture<TeamMemberListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamMemberListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
