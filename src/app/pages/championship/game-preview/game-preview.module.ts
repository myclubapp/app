import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePreviewPageRoutingModule } from './game-preview-routing.module';

import { GamePreviewPage } from './game-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePreviewPageRoutingModule
  ],
  declarations: [GamePreviewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GamePreviewPageModule {}
