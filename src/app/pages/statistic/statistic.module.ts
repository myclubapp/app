import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticPageRoutingModule } from './statistic-routing.module';

import { StatisticPage } from './statistic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticPageRoutingModule
  ],
  declarations: [StatisticPage]
})
export class StatisticPageModule {}
