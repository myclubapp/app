import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LoginPageRoutingModule} from './login-routing.module';

import {LoginPage} from './login.page';
import {AuthModule} from 'src/app/shared-modules/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, FormsModule,ReactiveFormsModule, IonicModule, LoginPageRoutingModule, AuthModule],
  declarations: [LoginPage],
})
export class LoginPageModule {}
