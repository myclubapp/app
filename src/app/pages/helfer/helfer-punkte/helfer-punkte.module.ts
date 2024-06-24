import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HelferPunktePageRoutingModule } from "./helfer-punkte-routing.module";

import { HelferPunktePage } from "./helfer-punkte.page";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelferPunktePageRoutingModule,
    TranslateModule
  ],
  declarations: [HelferPunktePage],
})
export class HelferPunktePageModule { }
