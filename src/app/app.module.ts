import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy, isPlatform } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { provideAuth, getAuth, initializeAuth } from "@angular/fire/auth";
import { indexedDBLocalPersistence } from "firebase/auth";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { provideMessaging, getMessaging } from "@angular/fire/messaging";
import { getAnalytics, provideAnalytics } from "@angular/fire/analytics";

// MODALs
// import { OnboardingPage } from "./pages/onboarding/onboarding.page";
import { NewsDetailPage } from "./pages/news/news-detail/news-detail.page";
import { MemberPage } from "./pages/member/member.page";
import { HelferPunktePage } from "./pages/helfer/helfer-punkte/helfer-punkte.page";
// import { ChampionshipDetailPage } from "./pages/championship/championship-detail/championship-detail.page";
import { TrainingDetailPage } from "./pages/training/training-detail/training-detail.page";
import { TrainingCreatePage } from "./pages/training/training-create/training-create.page";
import { TrainingExercisesPage } from "./pages/training/training-exercises/training-exercises.page";
import { EventAddPage } from "./pages/event/event-add/event-add.page";
import { EventDetailPage } from "./pages/event/event-detail/event-detail.page";
import { ClubPage } from "./pages/club/club.page";
import { TeamPage } from "./pages/team/team-detail/team.page";
import { Capacitor } from "@capacitor/core";
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from "@ngx-translate/core";
import { TranslateService } from '@ngx-translate/core';
import { LOCATION_INITIALIZED } from '@angular/common';

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HelferDetailPage } from "./pages/helfer/helfer-detail/helfer-detail.page";
import { HelferAddPage } from "./pages/helfer/helfer-add/helfer-add.page";
import { ClubMemberListPage } from "./pages/club-member-list/club-member-list.page";
import { TeamMemberListPage } from "./pages/team-member-list/team-member-list.page";
import { ClubAdminListPage } from "./pages/club-admin-list/club-admin-list.page";
import { TeamAdminListPage } from "./pages/team-admin-list/team-admin-list.page";
import { ClubTeamListPage } from "./pages/club-team-list/club-team-list.page";
import { TeamExercisesPage } from "./pages/team/team-exercises/team-exercises.page";
import { ClubRequestListPage } from "./pages/club-request-list/club-request-list.page";
import { TeamCreatePage } from "./pages/team/team-create/team-create.page";
import { take } from "rxjs";
import { HelferPunkteClubPage } from "./pages/helfer/helfer-punkte-club/helfer-punkte-club.page";
import { ClubSubscriptionPage } from "./pages/club-subscription/club-subscription.page";
import { GamePreviewPage } from "./pages/championship/game-preview/game-preview.page";
import { NotificationPage } from "./pages/news/notification/notification.page";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/lang/", ".json");
}
export class TranslateHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    /* some logic */
  }
}

export function appInitializerFactory(translateService: TranslateService, injector: Injector): () => Promise<any> {
  // tslint:disable-next-line:no-any
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      translateService.use("de")
        // here u can change language loaded before reander enything
        .pipe(take(1))
        .subscribe(() => { },
          err => console.error(err), () => resolve(null));
    })

  });
}
 const getConfig = () => {
  let config = { };
  if (isPlatform('iphone')) {
   // config["backButtonText"] = 'Previous';
  }
  return config;
};

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailPage,
    NotificationPage,
    MemberPage,
    HelferPunktePage,
    HelferPunkteClubPage,
    HelferDetailPage,
    HelferAddPage,
    // ChampionshipDetailPage,
    TrainingExercisesPage,
    TrainingDetailPage,
    TrainingCreatePage,
    GamePreviewPage,
    EventAddPage,
    EventDetailPage,
    // OnboardingPage,
    ClubPage,
    ClubMemberListPage,
    ClubAdminListPage,
    ClubTeamListPage,
    ClubRequestListPage,
    ClubSubscriptionPage,
    TeamPage,
    TeamMemberListPage,
    TeamAdminListPage,
    TeamExercisesPage,
    TeamCreatePage,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      },
      isolate: false,
      missingTranslationHandler: [{ provide: MissingTranslationHandler, useClass: TranslateHandler }]
    }),


  ],
  providers: [
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
          persistence: indexedDBLocalPersistence,
        });
      }
      else {
        return getAuth();
      }
      // const auth = getAuth();
      // setPersistence(auth,browserSessionPersistence);
      // return auth;
    }),
    provideAnalytics(() => getAnalytics()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }, provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }


