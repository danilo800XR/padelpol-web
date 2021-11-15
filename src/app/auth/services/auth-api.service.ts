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
}
