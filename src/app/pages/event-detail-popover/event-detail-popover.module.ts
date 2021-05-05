import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailPopoverPageRoutingModule } from './event-detail-popover-routing.module';

import { EventDetailPopoverPage } from './event-detail-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailPopoverPageRoutingModule
  ],
  declarations: [EventDetailPopoverPage]
})
export class EventDetailPopoverPageModule {}
