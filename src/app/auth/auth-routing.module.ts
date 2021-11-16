import { authRoutes } from './auth-routes';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  { path: authRoutes.loginPage, component: LoginPageComponent },
  { path: authRoutes.registerPage, component: RegisterPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
