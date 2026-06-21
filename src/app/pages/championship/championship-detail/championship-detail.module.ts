import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChampionshipDetailPageRoutingModule } from "./championship-detail-routing.module";

import { ChampionshipDetailPage } from "./championship-detail.page";
import { TranslateModule } from "@ngx-translate/core";
import { NgxMapLibreGLModule } from "@maplibre/ngx-maplibre-gl";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionshipDetailPageRoutingModule,
    TranslateModule,
    NgxMapLibreGLModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ChampionshipDetailPage],
})
export class ChampionshipDetailPageModule {}
