import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ClubInvoiceDetailPageRoutingModule } from "./club-invoice-detail-routing.module";

import { ClubInvoiceDetailPage } from "./club-invoice-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubInvoiceDetailPageRoutingModule,
  ],
  declarations: [ClubInvoiceDetailPage],
})
export class ClubInvoiceDetailPageModule {}
