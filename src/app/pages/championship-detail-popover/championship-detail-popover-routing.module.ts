import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipDetailPopoverPage } from './championship-detail-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionshipDetailPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionshipDetailPopoverPageRoutingModule {}
