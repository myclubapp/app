import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        loadChildren: () =>
          import('../news/news/news.module').then((m) => m.NewsPageModule),
      },
      {
        path: 'training',
        loadChildren: () =>
          import('../training/trainings/trainings.module').then(
            (m) => m.TrainingsPageModule
          ),
      },
      {
        path: 'championship',
        loadChildren: () =>
          import('../championship/championship/championship.module').then(
            (m) => m.ChampionshipPageModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('../event/events/events.module').then(
            (m) => m.EventsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
