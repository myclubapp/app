import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ChampionshipDetailPopoverPageRoutingModule} from './championship-detail-popover-routing.module';

import {ChampionshipDetailPopoverPage} from './championship-detail-popover.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ChampionshipDetailPopoverPageRoutingModule],
  declarations: [ChampionshipDetailPopoverPage],
})
export class ChampionshipDetailPopoverPageModule {}
