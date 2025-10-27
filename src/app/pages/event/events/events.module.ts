import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EventsPageRoutingModule } from "./events-routing.module";

import { EventsPage } from "./events.page";
import { TranslateModule } from "@ngx-translate/core";
import { StatusIconComponent } from "../../../components/status-icon/status-icon.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    TranslateModule,
    StatusIconComponent,
  ],
  declarations: [EventsPage],
})
export class EventsPageModule {}
