import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListPage } from './team-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeamListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamListPageRoutingModule {}
