import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreateNewClubPageRoutingModule } from "./create-new-club-routing.module";

import { CreateNewClubPage } from "./create-new-club.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewClubPageRoutingModule,
    TranslateModule,
  ],
  declarations: [CreateNewClubPage],
})
export class OnboardingClubPageModule {}
