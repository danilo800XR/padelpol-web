import { appRoutes } from './app-routes';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'padelpol-web';

  authModulePath = appRoutes.authModule;

  constructor(public router:Router){}
  
}
