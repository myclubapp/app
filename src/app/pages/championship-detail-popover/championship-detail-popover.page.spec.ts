import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ChampionshipDetailPopoverPage} from './championship-detail-popover.page';

describe('ChampionshipDetailPopoverPage', () => {
  let component: ChampionshipDetailPopoverPage;
  let fixture: ComponentFixture<ChampionshipDetailPopoverPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ChampionshipDetailPopoverPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(ChampionshipDetailPopoverPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
