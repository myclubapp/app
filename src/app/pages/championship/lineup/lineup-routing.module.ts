import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LineupPage } from "./lineup.page";

const routes: Routes = [
  {
    path: "",
    component: LineupPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineupPageRoutingModule {}
