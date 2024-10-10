import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingEmailPageRoutingModule } from './onboarding-email-routing.module';

import { OnboardingEmailPage } from './onboarding-email.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingEmailPageRoutingModule
  ],
  declarations: [OnboardingEmailPage]
})
export class OnboardingEmailPageModule {}
