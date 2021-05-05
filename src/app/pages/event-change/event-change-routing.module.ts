import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EventChangePage} from './event-change.page';

const routes: Routes = [
  {
    path: '',
    component: EventChangePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventChangePageRoutingModule {}
