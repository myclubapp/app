import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClubLinksEditPage } from "./club-links-edit.page";

const routes: Routes = [
  {
    path: "",
    component: ClubLinksEditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubLinksEditPageRoutingModule {}
