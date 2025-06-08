import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ClubLinksCreatePageRoutingModule } from "./club-links-create-routing.module";

import { ClubLinksCreatePage } from "./club-links-create.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClubLinksCreatePageRoutingModule,
  ],
  declarations: [ClubLinksCreatePage],
})
export class ClubLinksCreatePageModule {}
