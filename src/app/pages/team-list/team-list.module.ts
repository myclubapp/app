import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamListPageRoutingModule } from './team-list-routing.module';

import { TeamListPage } from './team-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TeamListPageRoutingModule, TranslateModule],
  declarations: [TeamListPage]
})
export class TeamListPageModule {}
