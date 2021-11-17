import { SweetalertService } from './../../../core/services/sweetalert.service';
import { GameApiService } from './../../services/game-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  constructor(public router: Router, private gameApiService: GameApiService,
    private sweetAlert: SweetalertService) { }

  ngOnInit(): void {
    this.gameApiService.getGames().subscribe({
      next: rest=> {
        console.log(rest);
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
