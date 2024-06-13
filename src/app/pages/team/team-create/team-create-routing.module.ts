import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamCreatePage } from './team-create.page';

const routes: Routes = [
  {
    path: '',
    component: TeamCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamCreatePageRoutingModule {}
