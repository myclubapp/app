import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingsPageRoutingModule } from './trainings-routing.module';

import { TrainingsPage } from './trainings.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TrainingsPageRoutingModule, TranslateModule],
  declarations: [TrainingsPage]
})
export class TrainingsPageModule {}
