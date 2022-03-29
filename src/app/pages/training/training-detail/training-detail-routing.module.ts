import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingDetailPage } from './training-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingDetailPageRoutingModule {}
