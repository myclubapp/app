import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsCreatePageRoutingModule } from './news-create-routing.module';

import { NewsCreatePage } from './news-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsCreatePageRoutingModule
  ],
  declarations: [NewsCreatePage]
})
export class NewsCreatePageModule {}
