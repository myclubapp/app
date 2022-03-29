import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingAddPageRoutingModule } from './training-add-routing.module';

import { TrainingAddPage } from './training-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingAddPageRoutingModule
  ],
  declarations: [TrainingAddPage]
})
export class TrainingAddPageModule {}
