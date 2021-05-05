import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingPage } from './ranking.page';

const routes: Routes = [
  {
    path: '',
    component: RankingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingPageRoutingModule {}
