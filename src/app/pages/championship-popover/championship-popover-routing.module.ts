import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipPopoverPage } from './championship-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionshipPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionshipPopoverPageRoutingModule {}
