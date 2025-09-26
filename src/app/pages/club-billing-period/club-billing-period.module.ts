import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ClubBillingPeriodPageRoutingModule } from "./club-billing-period-routing.module";

import { ClubBillingPeriodPage } from "./club-billing-period.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClubBillingPeriodPageRoutingModule,
  ],
  declarations: [ClubBillingPeriodPage],
})
export class ClubBillingPeriodPageModule {}
