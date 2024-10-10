import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubSubscriptionPageRoutingModule } from './club-subscription-routing.module';

import { ClubSubscriptionPage } from './club-subscription.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    ClubSubscriptionPageRoutingModule
  ],
  declarations: [ClubSubscriptionPage]
})
export class ClubSubscriptionPageModule {}
