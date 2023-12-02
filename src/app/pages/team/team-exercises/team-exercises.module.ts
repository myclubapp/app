import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TeamExercisesPageRoutingModule } from "./team-exercises-routing.module";

import { TeamExercisesPage } from "./team-exercises.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamExercisesPageRoutingModule,
  ],
  declarations: [TeamExercisesPage],
})
export class TeamExercisesPageModule {}
