import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MemberInvoiceListPage } from "./member-invoice-list.page";

const routes: Routes = [
  {
    path: "",
    component: MemberInvoiceListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberInvoiceListPageRoutingModule {}
