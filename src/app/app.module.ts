import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

// import { GraphQLModule } from './graphql.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
  provideAuth,
  getAuth,
  setPersistence,
  inMemoryPersistence
} from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';

// MODALs
import { NewsDetailPage } from './pages/news/news-detail/news-detail.page';
import { ChampionshipDetailPage } from './pages/championship/championship-detail/championship-detail.page';
import { TrainingDetailPage } from './pages/training/training-detail/training-detail.page';
import { TrainingCreatePage } from './pages/training/training-create/training-create.page';
import { EventDetailPage } from './pages/event/event-detail/event-detail.page';
import { ClubPage } from './pages/club/club.page';
import { TeamPage } from './pages/team/team.page';


@NgModule({
  declarations: [
    AppComponent,
    NewsDetailPage,
    ChampionshipDetailPage,
    TrainingDetailPage,
    TrainingCreatePage,
    EventDetailPage,
    ClubPage,
    TeamPage
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    // GraphQLModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging())
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
