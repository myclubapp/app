import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TrainingCreatePageRoutingModule } from "./training-create-routing.module";

import { TrainingCreatePage } from "./training-create.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingCreatePageRoutingModule,
    TranslateModule
  ],
  declarations: [TrainingCreatePage],
})
export class TrainingCreatePageModule {}
