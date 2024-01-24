import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubTeamListPageRoutingModule } from './club-team-list-routing.module';

import { ClubTeamListPage } from './club-team-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ClubTeamListPageRoutingModule
  ],
  declarations: [ClubTeamListPage]
})
export class ClubTeamListPageModule {}
