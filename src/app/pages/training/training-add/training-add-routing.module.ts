import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingAddPage } from './training-add.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingAddPageRoutingModule {}
