import { appRoutes } from './../../app-routes';
import { SessionStorageService } from './../services/session-storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authRoutes } from 'src/app/auth/auth-routes';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private sessionStorageService: SessionStorageService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.sessionStorageService.getItem("token")) return this.router.navigate([`${appRoutes.authModule}/${authRoutes.loginPage}`]);
      return true;
  }
  
}
