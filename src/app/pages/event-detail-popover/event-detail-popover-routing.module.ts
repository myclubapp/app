import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDetailPopoverPage } from './event-detail-popover.page';

const routes: Routes = [
  {
    path: '',
    component: EventDetailPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDetailPopoverPageRoutingModule {}
