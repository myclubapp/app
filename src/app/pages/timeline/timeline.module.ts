import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimelinePageRoutingModule } from './timeline-routing.module';

import { TimelinePage } from './timeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelinePageRoutingModule
  ],
  declarations: [TimelinePage]
})
export class TimelinePageModule {}
