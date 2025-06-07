import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ClubLinksPageRoutingModule } from "./club-links-routing.module";

import { ClubLinksPage } from "./club-links.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClubLinksPageRoutingModule,
  ],
  declarations: [ClubLinksPage],
})
export class ClubLinksPageModule {}
