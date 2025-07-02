import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClubInvoicePage } from "./club-invoice.page";

const routes: Routes = [
  {
    path: "",
    component: ClubInvoicePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubInvoicePageRoutingModule {}
