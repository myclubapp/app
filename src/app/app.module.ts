import {NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireFunctionsModule, REGION} from '@angular/fire/functions';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {AngularFireMessagingModule} from '@angular/fire/messaging';

import {environment} from 'src/environments/environment';

import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';

import {registerLocaleData} from '@angular/common';

//localization
import localeDECH from '@angular/common/locales/de-CH';
import localeDECHExtra from '@angular/common/locales/extra/de-CH';
registerLocaleData(localeDECH, localeDECHExtra);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    HttpClientModule,
    IonicModule.forRoot({
      backButtonText: 'Zurück',
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: REGION, useValue: 'europe-west6'},
    {provide: LOCALE_ID, useValue: 'de-CH'},
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
