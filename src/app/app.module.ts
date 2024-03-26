import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { provideAuth, getAuth, initializeAuth } from "@angular/fire/auth";
import {
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  indexedDBLocalPersistence,
  // indexedDBLocalPersistence
} from "firebase/auth";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { provideMessaging, getMessaging } from "@angular/fire/messaging";

// MODALs
import { OnboardingPage } from "./pages/onboarding/onboarding.page";
import { NewsDetailPage } from "./pages/news/news-detail/news-detail.page";
import { MemberPage } from "./pages/member/member.page";
import { HelferPunktePage } from "./pages/helfer/helfer-punkte/helfer-punkte.page";
import { ChampionshipDetailPage } from "./pages/championship/championship-detail/championship-detail.page";
import { TrainingDetailPage } from "./pages/training/training-detail/training-detail.page";
import { TrainingCreatePage } from "./pages/training/training-create/training-create.page";
import { TrainingExercisesPage } from "./pages/training/training-exercises/training-exercises.page";
import { EventAddPage } from "./pages/event/event-add/event-add.page";
import { EventDetailPage } from "./pages/event/event-detail/event-detail.page";
import { ClubPage } from "./pages/club/club.page";
import { TeamPage } from "./pages/team/team-detail/team.page";
import { Capacitor } from "@capacitor/core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HelferDetailPage } from "./pages/helfer/helfer-detail/helfer-detail.page";
import { HelferAddPage } from "./pages/helfer/helfer-add/helfer-add.page";
import { ClubMemberListPage } from "./pages/club-member-list/club-member-list.page";
import { TeamMemberListPage } from "./pages/team-member-list/team-member-list.page";
import { ClubAdminListPage } from "./pages/club-admin-list/club-admin-list.page";
import { TeamAdminListPage } from "./pages/team-admin-list/team-admin-list.page";
import { ClubTeamListPage } from "./pages/club-team-list/club-team-list.page";
import { TeamExercisesPage } from "./pages/team/team-exercises/team-exercises.page";

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailPage,
    MemberPage,

    HelferPunktePage,
    HelferDetailPage,
    HelferAddPage,
    // ChampionshipDetailPage,
    TrainingExercisesPage,
    TrainingDetailPage,
    TrainingCreatePage,

    EventAddPage,
    EventDetailPage,

    OnboardingPage,
    ClubPage,
    ClubMemberListPage,
    ClubAdminListPage,
    ClubTeamListPage,

    TeamPage,
    TeamMemberListPage,
    TeamAdminListPage,
    TeamExercisesPage,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      // <--- add this
      loader: {
        // <--- add this
        provide: TranslateLoader, // <--- add this
        useFactory: createTranslateLoader, // <--- add this
        deps: [HttpClient], // <--- add this
      }, // <--- add this
    }),
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
      } else {
        return getAuth();
      }
      // const auth = getAuth();
      // setPersistence(auth,browserSessionPersistence);
      // return auth;
    }),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/lang/", ".json");
}
