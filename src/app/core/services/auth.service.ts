import { SessionStorageService } from './session-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sessionStorage: SessionStorageService) { }

  getCurrentUser(){
     const token = this.sessionStorage.getItem("token");
     if(!token) return null;
     const payload = JSON.parse(token.split(".")[1]);
     return payload.user;
  }

}
