import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TeamExercisesPage } from "./team-exercises.page";

const routes: Routes = [
  {
    path: "",
    component: TeamExercisesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamExercisesPageRoutingModule {}
