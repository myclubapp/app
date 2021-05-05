import {RequestPageModule} from './../request/request.module';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './../../services/auth.guard';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../timeline/timeline.module').then((m) => m.TimelinePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'timeline',
        loadChildren: () => import('../timeline/timeline.module').then((m) => m.TimelinePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then((m) => m.NewsPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'news-detail/:id',
        loadChildren: () => import('../news-detail/news-detail.module').then((m) => m.NewsDetailPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'training',
        loadChildren: () => import('../training/training.module').then((m) => m.TrainingPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'training-detail/:id',
        loadChildren: () => import('../training-detail/training-detail.module').then((m) => m.TrainingDetailPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'training-create',
        loadChildren: () => import('../training-create/training-create.module').then((m) => m.TrainingCreatePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'championship',
        loadChildren: () => import('../championship/championship.module').then((m) => m.ChampionshipPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'championship-detail/:id',
        loadChildren: () => import('../championship-detail/championship-detail.module').then((m) => m.ChampionshipDetailPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'event',
        loadChildren: () => import('../events/events.module').then((m) => m.EventsPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'event-create',
        loadChildren: () => import('../event-create/event-create.module').then((m) => m.EventCreatePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'news-create',
        loadChildren: () => import('../news-create/news-create.module').then((m) => m.NewsCreatePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'news-change',
        loadChildren: () => import('../news-change/news-change.module').then((m) => m.NewsChangePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'event-detail/:id',
        loadChildren: () => import('../event-detail/event-detail.module').then((m) => m.EventDetailPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then((m) => m.ProfilePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'club-list',
        loadChildren: () => import('../club-list/club-list.module').then((m) => m.ClubListPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'team-list',
        loadChildren: () => import('../team-list/team-list.module').then((m) => m.TeamListPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'request/:id',
        loadChildren: () => import('../request/request.module').then((m) => m.RequestPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'member',
        loadChildren: () => import('../member/member.module').then((m) => m.MemberPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'member-detail',
        loadChildren: () => import('../member-detail/member-detail.module').then((m) => m.MemberDetailPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'club/:id',
        loadChildren: () => import('../club/club.module').then((m) => m.ClubPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'team/:id',
        loadChildren: () => import('../team/team.module').then((m) => m.TeamPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'agb-app',
        loadChildren: () => import('../agb-app/agb-app.module').then((m) => m.AgbAppPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'support',
        loadChildren: () => import('../support/support.module').then((m) => m.SupportPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'tutorial',
        loadChildren: () => import('../tutorial/tutorial.module').then((m) => m.TutorialPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'ranking',
        loadChildren: () => import('../ranking/ranking.module').then((m) => m.RankingPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'statistic',
        loadChildren: () => import('../statistic/statistic.module').then((m) => m.StatisticPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: '/home/timeline',
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
