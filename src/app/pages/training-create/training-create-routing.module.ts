import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingCreatePage } from './training-create.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingCreatePageRoutingModule {}
