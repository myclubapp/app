import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsCreatePage } from './news-create.page';

const routes: Routes = [
  {
    path: '',
    component: NewsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsCreatePageRoutingModule {}
