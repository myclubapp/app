import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubListPageRoutingModule } from './club-list-routing.module';

import { ClubListPage } from './club-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubListPageRoutingModule
  ],
  declarations: [ClubListPage]
})
export class ClubListPageModule {}
