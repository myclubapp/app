import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipPage } from './championship.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionshipPageRoutingModule {}
