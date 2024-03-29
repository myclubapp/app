import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IonicModule } from '@ionic/angular';

import { NewsDetailPageRoutingModule } from './news-detail-routing.module';

import { NewsDetailPage } from './news-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    IonicModule,
    NewsDetailPageRoutingModule,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NewsDetailPage]
})
export class NewsDetailPageModule {}
