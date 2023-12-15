import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HelferPunktePageRoutingModule } from "./helfer-punkte-routing.module";

import { HelferPunktePage } from "./helfer-punkte.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelferPunktePageRoutingModule,
  ],
  declarations: [HelferPunktePage],
})
export class HelferPunktePageModule {}
