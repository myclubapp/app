import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelferPage } from './helfer.page';

const routes: Routes = [
  {
    path: '',
    component: HelferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelferPageRoutingModule {}
