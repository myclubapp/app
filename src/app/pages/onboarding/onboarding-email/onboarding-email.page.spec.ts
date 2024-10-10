import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingEmailPage } from './onboarding-email.page';

describe('OnboardingEmailPage', () => {
  let component: OnboardingEmailPage;
  let fixture: ComponentFixture<OnboardingEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
