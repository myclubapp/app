import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubParentsListPageRoutingModule } from './club-parents-list-routing.module';

import { ClubParentsListPage } from './club-parents-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ClubParentsListPageRoutingModule
  ],
  declarations: [ClubParentsListPage]
})
export class ClubParentsListPageModule {}
