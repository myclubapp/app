import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelferPageRoutingModule } from './helfer-routing.module';

import { HelferPage } from './helfer.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelferPageRoutingModule,
    TranslateModule
  ],
  declarations: [HelferPage]
})
export class HelferPageModule {}
