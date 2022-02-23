import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../core/services/players.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  player: any;
  playerSelected: string = "";

  constructor(private playersService: PlayersService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      this.playerSelected = params.slug;
    });
    this.playersService.getPlayer(this.playerSelected).subscribe((data: any) => {
      this.player = data;
    })

  }
}
