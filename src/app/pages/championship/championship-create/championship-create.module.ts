import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChampionshipCreatePageRoutingModule } from "./championship-create-routing.module";

import { ChampionshipCreatePage } from "./championship-create.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionshipCreatePageRoutingModule,
    TranslateModule,
  ],
  declarations: [ChampionshipCreatePage],
})
export class ChampionshipCreatePageModule {}
