import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClubGamePreviewPage } from "./club-game-preview.page";

const routes: Routes = [
  {
    path: "",
    component: ClubGamePreviewPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubGamePreviewPageRoutingModule {}
