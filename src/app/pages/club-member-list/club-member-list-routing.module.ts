import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubMemberListPage } from './club-member-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClubMemberListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubMemberListPageRoutingModule {}
