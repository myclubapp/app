import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubSubscriptionPage } from './club-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: ClubSubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubSubscriptionPageRoutingModule {}
