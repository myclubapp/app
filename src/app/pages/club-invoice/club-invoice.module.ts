import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubInvoicePageRoutingModule } from './club-invoice-routing.module';

import { ClubInvoicePage } from './club-invoice.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ClubInvoicePageRoutingModule
  ],
  declarations: [ClubInvoicePage]
})
export class ClubInvoicePageModule {}
