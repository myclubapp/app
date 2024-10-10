import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubSubscriptionPage } from './club-subscription.page';

describe('ClubSubscriptionPage', () => {
  let component: ClubSubscriptionPage;
  let fixture: ComponentFixture<ClubSubscriptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSubscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
