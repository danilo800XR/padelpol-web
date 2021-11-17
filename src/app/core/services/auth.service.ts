import { SessionStorageService } from './session-storage.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sessionStorage: SessionStorageService) { }

  getCurrentUser(): User | null{
    try{
     const token = this.sessionStorage.getItem("token");
     if(!token) return null;
     const payload = JSON.parse(atob(token.split(".")[1]));
     return new User(payload.user);
    }catch(error){
      return null;
    }
  }

}
