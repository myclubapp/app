import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubTeamListPage } from './club-team-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClubTeamListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubTeamListPageRoutingModule {}
