import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamCreatePage } from './team-create.page';

describe('TeamCreatePage', () => {
  let component: TeamCreatePage;
  let fixture: ComponentFixture<TeamCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
