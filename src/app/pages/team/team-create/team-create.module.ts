import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamCreatePageRoutingModule } from './team-create-routing.module';

import { TeamCreatePage } from './team-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamCreatePageRoutingModule
  ],
  declarations: [TeamCreatePage]
})
export class TeamCreatePageModule {}
