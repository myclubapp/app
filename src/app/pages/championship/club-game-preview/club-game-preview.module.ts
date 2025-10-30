import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ClubGamePreviewPageRoutingModule } from "./club-game-preview-routing.module";

import { ClubGamePreviewPage } from "./club-game-preview.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubGamePreviewPageRoutingModule,
    TranslateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ClubGamePreviewPage],
})
export class ClubGamePreviewPageModule {}
