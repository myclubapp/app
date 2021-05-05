import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AgbAppPageRoutingModule} from './agb-app-routing.module';

import {AgbAppPage} from './agb-app.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AgbAppPageRoutingModule],
  declarations: [AgbAppPage],
})
export class AgbAppPageModule {}
