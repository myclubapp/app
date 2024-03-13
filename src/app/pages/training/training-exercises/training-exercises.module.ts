import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TrainingExercisesPageRoutingModule } from "./training-exercises-routing.module";

import { TrainingExercisesPage } from "./training-exercises.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingExercisesPageRoutingModule,
    TranslateModule,
  ],
  declarations: [TrainingExercisesPage],
})
export class TrainingExercisesPageModule {}
