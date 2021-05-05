import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {TrainingDetailPopoverPage} from './training-detail-popover.page';

describe('TrainingDetailPopoverPage', () => {
  let component: TrainingDetailPopoverPage;
  let fixture: ComponentFixture<TrainingDetailPopoverPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TrainingDetailPopoverPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(TrainingDetailPopoverPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
