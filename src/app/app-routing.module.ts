import { authRoutes } from './auth/auth-routes';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { IsAuthenticatedGuard } from './core/guards/is-authenticated.guard';
import { appRoutes } from './app-routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: appRoutes.authModule,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: appRoutes.gamesModule,
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule),
    canActivate: [IsAuthenticatedGuard]
  },
  {path: '**', redirectTo: `${appRoutes.authModule}/${authRoutes.loginPage}`, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
