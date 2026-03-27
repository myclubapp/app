import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

import { ClubInvoiceDetailPageRoutingModule } from "./club-invoice-detail-routing.module";

import { ClubInvoiceDetailPage } from "./club-invoice-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClubInvoiceDetailPageRoutingModule,
  ],
  declarations: [ClubInvoiceDetailPage],
})
export class ClubInvoiceDetailPageModule {}
