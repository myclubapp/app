import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberDetailPage } from './member-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MemberDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberDetailPageRoutingModule {}
