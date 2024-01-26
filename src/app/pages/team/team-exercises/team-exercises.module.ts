import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TeamExercisesPageRoutingModule } from "./team-exercises-routing.module";

import { TeamExercisesPage } from "./team-exercises.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamExercisesPageRoutingModule,
    TranslateModule,
  ],
  declarations: [TeamExercisesPage],
})
export class TeamExercisesPageModule {}
