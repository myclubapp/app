import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamAdminListPageRoutingModule } from './team-admin-list-routing.module';

import { TeamAdminListPage } from './team-admin-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamAdminListPageRoutingModule
  ],
  declarations: [TeamAdminListPage]
})
export class TeamAdminListPageModule {}
