import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingEmailPage } from './onboarding-email.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingEmailPageRoutingModule {}
