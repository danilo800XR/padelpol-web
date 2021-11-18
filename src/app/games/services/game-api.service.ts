import { GamesApiResponse } from './../interfaces/games-api-response';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/core/config';
import { map } from 'rxjs/internal/operators/map';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<GamesApiResponse[]>(`${config.apiUrl}/games`)
      .pipe(map((res: GamesApiResponse[]) => {
        return res.map((g: GamesApiResponse) => {
          return new Game(<Game>Object.assign(g, {
            paddleLevel: g.paddle_level,
            courtPrice: g.court_price
          }));
        })
      }));
  }

}
