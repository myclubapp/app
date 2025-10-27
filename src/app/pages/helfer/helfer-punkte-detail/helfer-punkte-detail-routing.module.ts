import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelferPunkteDetailPage } from './helfer-punkte-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HelferPunkteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelferPunkteDetailPageRoutingModule {}
