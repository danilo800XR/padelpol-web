import { SweetalertService } from './../../../core/services/sweetalert.service';
import { GameApiService } from './../../services/game-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../models/game';


@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  games: Game[];

  constructor(public router: Router, private gameApiService: GameApiService,
    private sweetAlert: SweetalertService) { }

  ngOnInit(): void {
    this.gameApiService.getGames().subscribe({
      next: res=> {
        this.games = res;
      },
      error: err=> this.sweetAlert.showApiErrors(err)      
    });
  }

  openCreateGameDialog(): void {
    // this.dialog.open(CreateGameDialogComponent, {
    //   data: {}
    // });
  }

}
