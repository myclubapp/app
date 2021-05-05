import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {EventChangePageRoutingModule} from './event-change-routing.module';

import {EventChangePage} from './event-change.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EventChangePageRoutingModule],
  declarations: [EventChangePage],
})
export class EventChangePageModule {}
