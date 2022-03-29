import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsAddPageRoutingModule } from './news-add-routing.module';

import { NewsAddPage } from './news-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsAddPageRoutingModule
  ],
  declarations: [NewsAddPage]
})
export class NewsAddPageModule {}
