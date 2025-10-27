import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TrainingsPageRoutingModule } from "./trainings-routing.module";

import { TrainingsPage } from "./trainings.page";
import { TranslateModule } from "@ngx-translate/core";
import { StatusIconComponent } from "../../../components/status-icon/status-icon.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingsPageRoutingModule,
    TranslateModule,
    StatusIconComponent,
  ],
  declarations: [TrainingsPage],
})
export class TrainingsPageModule {}
