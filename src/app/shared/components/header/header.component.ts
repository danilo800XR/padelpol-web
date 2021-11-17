import { authRoutes } from './../../../auth/auth-routes';
import { appRoutes } from './../../../app-routes';
import { SessionStorageService } from './../../../core/services/session-storage.service';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User | null;

  constructor(public router: Router, private authService: AuthService,
    private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

  logOut(){
    this.sessionStorageService.removeItem("token");
    this.router.navigate([`${appRoutes.authModule}/${authRoutes.loginPage}`]);
  }

  openShowUserDialog() {

  }

}
