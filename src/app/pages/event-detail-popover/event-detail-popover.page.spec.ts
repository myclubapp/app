import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {EventDetailPopoverPage} from './event-detail-popover.page';

describe('EventDetailPopoverPage', () => {
  let component: EventDetailPopoverPage;
  let fixture: ComponentFixture<EventDetailPopoverPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventDetailPopoverPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(EventDetailPopoverPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
