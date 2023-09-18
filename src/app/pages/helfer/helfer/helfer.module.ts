import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelferPageRoutingModule } from './helfer-routing.module';

import { HelferPage } from './helfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelferPageRoutingModule
  ],
  declarations: [HelferPage]
})
export class HelferPageModule {}
