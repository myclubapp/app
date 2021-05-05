import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ResetPasswordPageRoutingModule} from './reset-password-routing.module';

import {ResetPasswordPage} from './reset-password.page';
import {AuthModule} from 'src/app/shared-modules/auth.module';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ResetPasswordPageRoutingModule, AuthModule],
  declarations: [ResetPasswordPage],
})
export class ResetPasswordPageModule {}
