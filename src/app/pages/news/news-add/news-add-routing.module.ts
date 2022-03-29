import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsAddPage } from './news-add.page';

const routes: Routes = [
  {
    path: '',
    component: NewsAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsAddPageRoutingModule {}
