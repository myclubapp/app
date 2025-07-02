import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClubBillingPeriodPage } from "./club-billing-period.page";

const routes: Routes = [
  {
    path: "",
    component: ClubBillingPeriodPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubBillingPeriodPageRoutingModule {}
