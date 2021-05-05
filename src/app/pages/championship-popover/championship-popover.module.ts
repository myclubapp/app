import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampionshipPopoverPageRoutingModule } from './championship-popover-routing.module';

import { ChampionshipPopoverPage } from './championship-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionshipPopoverPageRoutingModule
  ],
  declarations: [ChampionshipPopoverPage]
})
export class ChampionshipPopoverPageModule {}
