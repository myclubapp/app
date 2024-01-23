import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubTeamListPage } from './club-team-list.page';

describe('ClubTeamListPage', () => {
  let component: ClubTeamListPage;
  let fixture: ComponentFixture<ClubTeamListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClubTeamListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
