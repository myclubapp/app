import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubParentsListPage } from './club-parents-list.page';

describe('ClubParentsListPage', () => {
  let component: ClubParentsListPage;
  let fixture: ComponentFixture<ClubParentsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubParentsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
