import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../core/services/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: any;
  selectedPosition: number = 0;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.playersService.getPlayers(this.selectedPosition).subscribe((data: any) => {
      this.players = data;
    })
  }

}
