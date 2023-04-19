import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {
  AuthGuard,
  redirectUnauthorizedTo,
  emailVerified,
} from "@angular/fire/auth-guard";

// https://github.com/angular/angularfire/blob/master/docs/auth/router-guards.md
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/auth/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "logout",
    loadChildren: () =>
      import("./pages/auth/logout/logout.module").then(
        (m) => m.LogoutPageModule
      ),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/auth/signup/signup.module").then(
        (m) => m.SignupPageModule
      ),
  },

  {
    path: "follow",
    loadChildren: () =>
      import("./pages/follow/follow.module").then((m) => m.FollowPageModule),
  },
  {
    path: "club-list",
    loadChildren: () =>
      import("./pages/club-list/club-list.module").then(
        (m) => m.ClubListPageModule
      ),
  },
  {
    path: "team-list",
    loadChildren: () =>
      import("./pages/team-list/team-list.module").then(
        (m) => m.TeamListPageModule
      ),
  },
  {
    path: "news",
    loadChildren: () =>
      import("./pages/news/news/news.module").then((m) => m.NewsPageModule),
  },
  {
    path: "reset-password",
    loadChildren: () =>
      import("./pages/auth/reset-password/reset-password.module").then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "trainings",
    loadChildren: () =>
      import("./pages/training/trainings/trainings.module").then(
        (m) => m.TrainingsPageModule
      ),
  },
  {
    path: "events",
    loadChildren: () =>
      import("./pages/event/events/events.module").then(
        (m) => m.EventsPageModule
      ),
  },
  {
    path: "championship",
    loadChildren: () =>
      import("./pages/championship/championship/championship.module").then(
        (m) => m.ChampionshipPageModule
      ),
  },
  {
    path: "onboarding",
    loadChildren: () =>
      import("./pages/onboarding/onboarding.module").then(
        (m) => m.OnboardingPageModule
      ),
  },
  {
    path: "onboarding-team",
    loadChildren: () =>
      import("./pages/onboarding-team/onboarding-team.module").then(
        (m) => m.OnboardingTeamPageModule
      ),
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: "**",
    loadChildren: () =>
      import("./pages/not-found/not-found.module").then(
        (m) => m.NotFoundPageModule
      ),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
