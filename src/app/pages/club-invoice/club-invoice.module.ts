import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

import { ClubInvoicePageRoutingModule } from "./club-invoice-routing.module";

import { ClubInvoicePage } from "./club-invoice.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClubInvoicePageRoutingModule,
  ],
  declarations: [ClubInvoicePage],
})
export class ClubInvoicePageModule {}
