import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LineupPageRoutingModule } from "./lineup-routing.module";

import { LineupPage } from "./lineup.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LineupPageRoutingModule],
  declarations: [LineupPage],
})
export class LineupPageModule {}
