import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubAdminListPage } from './club-admin-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClubAdminListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubAdminListPageRoutingModule {}
