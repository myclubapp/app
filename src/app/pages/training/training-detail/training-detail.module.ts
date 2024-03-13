import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingDetailPageRoutingModule } from './training-detail-routing.module';

import { TrainingDetailPage } from './training-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [TrainingDetailPage]
})
export class TrainingDetailPageModule {}
