import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingDetailPageRoutingModule } from './training-detail-routing.module';

import { TrainingDetailPage } from './training-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingDetailPageRoutingModule
  ],
  declarations: [TrainingDetailPage]
})
export class TrainingDetailPageModule {}
