import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingClubPageRoutingModule } from './onboarding-club-routing.module';

import { OnboardingClubPage } from './onboarding-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingClubPageRoutingModule
  ],
  declarations: [OnboardingClubPage]
})
export class OnboardingClubPageModule {}