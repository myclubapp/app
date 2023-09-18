import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelferAddPage } from './helfer-add.page';

describe('HelferAddPage', () => {
  let component: HelferAddPage;
  let fixture: ComponentFixture<HelferAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelferAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
