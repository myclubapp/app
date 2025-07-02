import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateNewsPage } from "./create-news.page";

const routes: Routes = [
  {
    path: "",
    component: CreateNewsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewsPageRoutingModule {}
