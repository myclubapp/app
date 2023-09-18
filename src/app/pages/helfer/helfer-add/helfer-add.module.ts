import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelferAddPageRoutingModule } from './helfer-add-routing.module';

import { HelferAddPage } from './helfer-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelferAddPageRoutingModule
  ],
  declarations: [HelferAddPage]
})
export class HelferAddPageModule {}
