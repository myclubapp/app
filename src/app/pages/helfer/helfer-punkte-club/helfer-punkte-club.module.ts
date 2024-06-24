import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelferPunkteClubPageRoutingModule } from './helfer-punkte-club-routing.module';

import { HelferPunkteClubPage } from './helfer-punkte-club.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelferPunkteClubPageRoutingModule,
    TranslateModule
  ],
  declarations: [HelferPunkteClubPage]
})
export class HelferPunkteClubPageModule { }
