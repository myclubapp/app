import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampionshipPageRoutingModule } from './championship-routing.module';

import { ChampionshipPage } from './championship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionshipPageRoutingModule
  ],
  declarations: [ChampionshipPage]
})
export class ChampionshipPageModule {}
