import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamPageRoutingModule } from './team-routing.module';

import { TeamPage } from './team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPageRoutingModule
  ],
  declarations: [TeamPage]
})
export class TeamPageModule {}
