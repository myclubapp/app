import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubAdminListPageRoutingModule } from './club-admin-list-routing.module';

import { ClubAdminListPage } from './club-admin-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ClubAdminListPageRoutingModule
  ],
  declarations: [ClubAdminListPage]
})
export class ClubAdminListPageModule {}
