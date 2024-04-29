import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubRequestListPage } from './club-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClubRequestListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubRequestListPageRoutingModule {}
