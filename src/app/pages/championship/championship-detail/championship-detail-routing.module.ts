import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipDetailPage } from './championship-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionshipDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionshipDetailPageRoutingModule {}
