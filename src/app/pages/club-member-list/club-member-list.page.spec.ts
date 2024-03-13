import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubMemberListPage } from './club-member-list.page';

describe('ClubMemberListPage', () => {
  let component: ClubMemberListPage;
  let fixture: ComponentFixture<ClubMemberListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClubMemberListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
