import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelferPunkteDetailPage } from './helfer-punkte-detail.page';

describe('HelferPunkteDetailPage', () => {
  let component: HelferPunkteDetailPage;
  let fixture: ComponentFixture<HelferPunkteDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HelferPunkteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
