import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelferPunkteDetailPageRoutingModule } from './helfer-punkte-detail-routing.module';

import { HelferPunkteDetailPage } from './helfer-punkte-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelferPunkteDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [HelferPunkteDetailPage]
})
export class HelferPunkteDetailPageModule {}
