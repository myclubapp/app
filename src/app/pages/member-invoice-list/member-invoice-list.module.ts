import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MemberInvoiceListPageRoutingModule } from "./member-invoice-list-routing.module";

import { MemberInvoiceListPage } from "./member-invoice-list.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberInvoiceListPageRoutingModule,
  ],
  declarations: [MemberInvoiceListPage],
})
export class MemberInvoiceListPageModule {}
