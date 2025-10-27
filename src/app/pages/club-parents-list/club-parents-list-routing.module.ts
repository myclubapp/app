import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubParentsListPage } from './club-parents-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClubParentsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubParentsListPageRoutingModule {}
