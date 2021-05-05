import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingChangePageRoutingModule } from './training-change-routing.module';

import { TrainingChangePage } from './training-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingChangePageRoutingModule
  ],
  declarations: [TrainingChangePage]
})
export class TrainingChangePageModule {}
