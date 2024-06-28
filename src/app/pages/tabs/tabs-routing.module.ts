import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { map, pipe, tap } from 'rxjs';
import {
  AuthGuard,
  emailVerified,
} from "@angular/fire/auth-guard";

const redirectUnverifiedTo = (redirect: any[]) => pipe(emailVerified, map(emailVerified => emailVerified || redirect));
const redirectUnauthorizedToLogin = () => redirectUnverifiedTo(['/onboarding-email']);

const routes: Routes = [
  {
    path: 't',
    component: TabsPage,
    children: [
      {
        path: 'news',
        loadChildren: () =>
          import('../news/news/news.module').then((m) => m.NewsPageModule),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      {
        path: 'training',
        loadChildren: () =>
          import('../training/trainings/trainings.module').then(
            (m) => m.TrainingsPageModule
          ),
          canActivate: [AuthGuard],
          data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      {
        path: 'championship',
        loadChildren: () =>
          import('../championship/championship/championship.module').then(
            (m) => m.ChampionshipPageModule
          ),
          canActivate: [AuthGuard],
          data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      {
        path: 'events',
        loadChildren: () =>
          import('../event/events/events.module').then(
            (m) => m.EventsPageModule
          ),
          canActivate: [AuthGuard],
          data: { authGuardPipe: redirectUnauthorizedToLogin },
      }, {
        path: 'helfer',
        loadChildren: () =>
          import('../helfer/helfer/helfer.module').then(
            (m) => m.HelferPageModule
          ),
          canActivate: [AuthGuard],
          data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      {
        path: '',
        redirectTo: '/t/news',
        pathMatch: 'full',
       
      }
    ]
  },
  {
    path: '',
    redirectTo: '/t/news',
    pathMatch: 'full',
   
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
