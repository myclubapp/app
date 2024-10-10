import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingClubPage } from './onboarding-club.page';

describe('OnboardingClubPage', () => {
  let component: OnboardingClubPage;
  let fixture: ComponentFixture<OnboardingClubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
