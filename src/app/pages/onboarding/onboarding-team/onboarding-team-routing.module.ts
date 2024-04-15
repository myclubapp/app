import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OnboardingTeamPage } from "./onboarding-team.page";

const routes: Routes = [
  {
    path: "",
    component: OnboardingTeamPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingTeamPageRoutingModule {}
