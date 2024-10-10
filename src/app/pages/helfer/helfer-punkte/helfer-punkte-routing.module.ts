import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HelferPunktePage } from "./helfer-punkte.page";

const routes: Routes = [
  {
    path: "",
    component: HelferPunktePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelferPunktePageRoutingModule { }
