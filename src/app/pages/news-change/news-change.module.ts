import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewsChangePageRoutingModule} from './news-change-routing.module';

import {NewsChangePage} from './news-change.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NewsChangePageRoutingModule],
  declarations: [NewsChangePage],
})
export class NewsChangePageModule {}
