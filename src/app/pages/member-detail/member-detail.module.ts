import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberDetailPageRoutingModule } from './member-detail-routing.module';

import { MemberDetailPage } from './member-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberDetailPageRoutingModule
  ],
  declarations: [MemberDetailPage]
})
export class MemberDetailPageModule {}
