import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamePreviewPage } from './game-preview.page';

describe('GamePreviewPage', () => {
  let component: GamePreviewPage;
  let fixture: ComponentFixture<GamePreviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
