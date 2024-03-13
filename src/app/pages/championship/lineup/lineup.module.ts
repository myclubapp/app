import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LineupPageRoutingModule } from "./lineup-routing.module";

import { LineupPage } from "./lineup.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineupPageRoutingModule,
    TranslateModule,
  ],
  declarations: [LineupPage],
})
export class LineupPageModule {}
