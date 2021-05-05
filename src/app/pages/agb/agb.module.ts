import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgbPageRoutingModule } from './agb-routing.module';

import { AgbPage } from './agb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgbPageRoutingModule
  ],
  declarations: [AgbPage]
})
export class AgbPageModule {}
