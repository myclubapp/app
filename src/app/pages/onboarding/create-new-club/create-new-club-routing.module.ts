import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateNewClubPage } from "./create-new-club.page";

const routes: Routes = [
  {
    path: "",
    component: CreateNewClubPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewClubPageRoutingModule {}
