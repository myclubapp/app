import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ClubLinksEditPageRoutingModule } from "./club-links-edit-routing.module";

import { ClubLinksEditPage } from "./club-links-edit.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ClubLinksEditPageRoutingModule,
  ],
  declarations: [ClubLinksEditPage],
})
export class ClubLinksEditPageModule {}
