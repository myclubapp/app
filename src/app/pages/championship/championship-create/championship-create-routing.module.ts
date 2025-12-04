import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChampionshipCreatePage } from "./championship-create.page";

const routes: Routes = [
  {
    path: "",
    component: ChampionshipCreatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionshipCreatePageRoutingModule {}
