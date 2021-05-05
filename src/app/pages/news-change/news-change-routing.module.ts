import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsChangePage } from './news-change.page';

const routes: Routes = [
  {
    path: '',
    component: NewsChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsChangePageRoutingModule {}
