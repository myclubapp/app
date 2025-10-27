import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { QrInvoiceModalPageRoutingModule } from "./qr-invoice-modal-routing.module";

import { QrInvoiceModalPage } from "./qr-invoice-modal.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrInvoiceModalPageRoutingModule,
  ],
  declarations: [QrInvoiceModalPage],
})
export class QrInvoiceModalPageModule {}
