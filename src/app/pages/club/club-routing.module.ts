import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubPage } from './club.page';

const routes: Routes = [
  {
    path: '',
    component: ClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubPageRoutingModule {}
