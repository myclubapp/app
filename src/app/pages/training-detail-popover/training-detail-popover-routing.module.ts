import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TrainingDetailPopoverPage} from './training-detail-popover.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingDetailPopoverPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingDetailPopoverPageRoutingModule {}
