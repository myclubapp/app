import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgbPage } from './agb.page';

const routes: Routes = [
  {
    path: '',
    component: AgbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgbPageRoutingModule {}
