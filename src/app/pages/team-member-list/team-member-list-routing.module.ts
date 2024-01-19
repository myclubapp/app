import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamMemberListPage } from './team-member-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeamMemberListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamMemberListPageRoutingModule {}
