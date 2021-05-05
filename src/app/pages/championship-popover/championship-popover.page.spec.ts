import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ChampionshipPopoverPage} from './championship-popover.page';

describe('ChampionshipPopoverPage', () => {
  let component: ChampionshipPopoverPage;
  let fixture: ComponentFixture<ChampionshipPopoverPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ChampionshipPopoverPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(ChampionshipPopoverPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
