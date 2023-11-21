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
import { getFirestore, provideFirestore, persistentLocalCache } from '@angular/fire/firestore';
import { provideAuth,getAuth, initializeAuth } from '@angular/fire/auth'
import {
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  indexedDBLocalPersistence,
  // indexedDBLocalPersistence
} from 'firebase/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';

// MODALs
import { NewsDetailPage } from './pages/news/news-detail/news-detail.page';
import { ChampionshipDetailPage } from './pages/championship/championship-detail/championship-detail.page';
import { TrainingDetailPage } from './pages/training/training-detail/training-detail.page';
import { TrainingCreatePage } from './pages/training/training-create/training-create.page';
import { EventAddPage } from './pages/event/event-add/event-add.page';
import { EventDetailPage } from './pages/event/event-detail/event-detail.page';
import { ClubPage } from './pages/club/club.page';
import { TeamPage } from './pages/team/team.page';
import { Capacitor } from '@capacitor/core';


@NgModule({
  declarations: [
    AppComponent,
    NewsDetailPage,
    // ChampionshipDetailPage,
    TrainingDetailPage,
    TrainingCreatePage,
    EventAddPage,
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
    provideFirebaseApp(() => {
      const init = initializeApp(environment.firebase);
     return init;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      return firestore;
    }),
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence
        })
      } else {
        return getAuth()
      }
      // const auth = getAuth(); 
      // setPersistence(auth,browserSessionPersistence);
      // return auth;
    }),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
