import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamAdminListPage } from './team-admin-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeamAdminListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamAdminListPageRoutingModule {}
