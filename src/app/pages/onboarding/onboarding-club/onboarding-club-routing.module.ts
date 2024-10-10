import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingClubPage } from './onboarding-club.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingClubPageRoutingModule {}
