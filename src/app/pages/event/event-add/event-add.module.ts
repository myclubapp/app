import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventAddPageRoutingModule } from './event-add-routing.module';

import { EventAddPage } from './event-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventAddPageRoutingModule
  ],
  declarations: [EventAddPage]
})
export class EventAddPageModule {}
