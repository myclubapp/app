import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubMemberListPageRoutingModule } from './club-member-list-routing.module';

import { ClubMemberListPage } from './club-member-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ClubMemberListPageRoutingModule
  ],
  declarations: [ClubMemberListPage]
})
export class ClubMemberListPageModule {}
