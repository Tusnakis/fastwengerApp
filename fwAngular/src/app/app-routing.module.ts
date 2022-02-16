import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersListComponent } from './player/players-list/players-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayersListComponent
  },
  {
    path: 'player/:slug',
    component: PlayerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
