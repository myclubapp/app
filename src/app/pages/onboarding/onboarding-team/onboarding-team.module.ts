import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OnboardingTeamPageRoutingModule } from "./onboarding-team-routing.module";

import { OnboardingTeamPage } from "./onboarding-team.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingTeamPageRoutingModule,
    TranslateModule
  ],
  declarations: [OnboardingTeamPage],
})
export class OnboardingTeamPageModule {}
