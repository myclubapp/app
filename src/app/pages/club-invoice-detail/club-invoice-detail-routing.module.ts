import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClubInvoiceDetailPage } from "./club-invoice-detail.page";

const routes: Routes = [
  {
    path: "",
    component: ClubInvoiceDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubInvoiceDetailPageRoutingModule {}
