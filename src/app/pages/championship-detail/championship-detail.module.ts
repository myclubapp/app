import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ChampionshipDetailPageRoutingModule } from './championship-detail-routing.module';

import { ChampionshipDetailPage } from './championship-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionshipDetailPageRoutingModule
  ],
  declarations: [ChampionshipDetailPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ChampionshipDetailPageModule {}
