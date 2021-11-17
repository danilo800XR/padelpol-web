import { LoginApiResponse } from './../interfaces/login-api-response';
import { RegisterApiResponse } from './../interfaces/register-api-response';
import { RegisterApiRequest } from './../interfaces/register-api-request';
import { PaddelLevelApiResponse } from '../../core/models/interfaces/paddel-level-api-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginApiRequest } from '../interfaces/login-api-request';
import { config } from 'src/app/core/config';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http:HttpClient) { }

  register(params : RegisterApiRequest):Observable<RegisterApiResponse>{
    return this.http.post<RegisterApiResponse>(`${config.apiUrl}/auth/register`, params);
  }
  login(params : LoginApiRequest):Observable<LoginApiResponse>{
    return this.http.post<LoginApiResponse>(`${config.apiUrl}/auth/login`, params);
  }
}
