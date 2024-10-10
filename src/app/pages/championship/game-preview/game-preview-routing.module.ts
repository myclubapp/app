import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePreviewPage } from './game-preview.page';

const routes: Routes = [
  {
    path: '',
    component: GamePreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePreviewPageRoutingModule {}
