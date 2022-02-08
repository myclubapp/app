import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampionshipDetailPageRoutingModule } from './championship-detail-routing.module';

import { ChampionshipDetailPage } from './championship-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionshipDetailPageRoutingModule
  ],
  declarations: [ChampionshipDetailPage]
})
export class ChampionshipDetailPageModule {}
