import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelferPage } from './helfer.page';

describe('HelferPage', () => {
  let component: HelferPage;
  let fixture: ComponentFixture<HelferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
