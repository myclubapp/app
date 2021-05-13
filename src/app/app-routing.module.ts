import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
//import {AuthGuard} from './services/auth.guard';
const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },


  /* AUTHENTICATED AREA */
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
    //canActivate: [AuthGuard],
  },


  /* AUTH PAGES */
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then((m) => m.ResetPasswordPageModule),
  },

  /* PUBLIC PAGES */
  {
    path: 'agb',
    loadChildren: () => import('./pages/agb/agb.module').then((m) => m.AgbPageModule),
  },
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
*/

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
