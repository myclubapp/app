import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TrainingDetailPopoverPageRoutingModule} from './training-detail-popover-routing.module';

import {TrainingDetailPopoverPage} from './training-detail-popover.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TrainingDetailPopoverPageRoutingModule],
  declarations: [TrainingDetailPopoverPage],
})
export class TrainingDetailPopoverPageModule {}
