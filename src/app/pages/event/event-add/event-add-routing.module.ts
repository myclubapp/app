import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventAddPage } from './event-add.page';

const routes: Routes = [
  {
    path: '',
    component: EventAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventAddPageRoutingModule {}
