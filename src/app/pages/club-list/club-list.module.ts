import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubListPageRoutingModule } from './club-list-routing.module';

import { ClubListPage } from './club-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ClubListPageRoutingModule, TranslateModule],
  declarations: [ClubListPage]
})
export class ClubListPageModule {}
