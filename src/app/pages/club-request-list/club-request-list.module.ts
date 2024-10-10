import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubRequestListPageRoutingModule } from './club-request-list-routing.module';

import { ClubRequestListPage } from './club-request-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    ClubRequestListPageRoutingModule
  ],
  declarations: [ClubRequestListPage]
})
export class ClubRequestListPageModule {}
