import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubListPage } from './club-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClubListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubListPageRoutingModule {}
