import { AuthService } from './../services/auth.service';
import { appRoutes } from './../../app-routes';import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authRoutes } from 'src/app/auth/auth-routes';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.getCurrentUser()) return this.router.navigate([`${appRoutes.authModule}/${authRoutes.loginPage}`]);
      return true;
  }
  
}
