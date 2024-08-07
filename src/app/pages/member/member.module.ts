import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MemberPageRoutingModule } from "./member-routing.module";

import { MemberPage } from "./member.page";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberPageRoutingModule,
    TranslateModule,
  ],
  declarations: [MemberPage],
})
export class MemberPageModule {}
