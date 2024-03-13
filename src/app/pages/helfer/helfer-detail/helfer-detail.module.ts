import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelferDetailPageRoutingModule } from './helfer-detail-routing.module';

import { HelferDetailPage } from './helfer-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelferDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [HelferDetailPage]
})
export class HelferDetailPageModule {}
