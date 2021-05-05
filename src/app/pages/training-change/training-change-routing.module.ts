import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TrainingChangePage} from './training-change.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingChangePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingChangePageRoutingModule {}
