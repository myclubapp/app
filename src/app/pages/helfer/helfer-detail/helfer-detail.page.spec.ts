import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelferDetailPage } from './helfer-detail.page';

describe('HelferDetailPage', () => {
  let component: HelferDetailPage;
  let fixture: ComponentFixture<HelferDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelferDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
