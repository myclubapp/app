import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowPageRoutingModule } from './follow-routing.module';

import { FollowPage } from './follow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowPageRoutingModule
  ],
  declarations: [FollowPage]
})
export class FollowPageModule {}
