import { config } from './../config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PaddelLevelApiResponse } from '../models/interfaces/paddel-level-api-response';

@Injectable({
  providedIn: 'root'
})
export class PadelpolApiService {

  constructor(private http: HttpClient) { }
  
  getPaddleLevels():Observable<PaddelLevelApiResponse[]>{
    return this.http.get<PaddelLevelApiResponse[]>(`${config.apiUrl}/paddle-levels`)
  }

}
