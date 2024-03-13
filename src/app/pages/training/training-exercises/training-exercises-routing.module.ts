import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TrainingExercisesPage } from "./training-exercises.page";

const routes: Routes = [
  {
    path: "",
    component: TrainingExercisesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingExercisesPageRoutingModule {}
