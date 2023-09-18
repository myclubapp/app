import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelferAddPage } from './helfer-add.page';

const routes: Routes = [
  {
    path: '',
    component: HelferAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelferAddPageRoutingModule {}
