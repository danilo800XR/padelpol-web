import { RegisterApiResponse } from './../interfaces/register-api-response';
import { RegisterApiRequest } from './../interfaces/register-api-request';
import { PaddelLevelApiResponse } from './../interfaces/paddel-level-api-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http:HttpClient) { }

  getPaddleLevels():Observable<PaddelLevelApiResponse[]>{
    return this.http.get<PaddelLevelApiResponse[]>("http://padelpol.herokuapp.com/api/paddle-levels")
  }

  register(params : RegisterApiRequest):Observable<RegisterApiResponse>{
    return this.http.post<RegisterApiResponse>("http://padelpol.herokuapp.com/api/auth/register", params);
  }
}
