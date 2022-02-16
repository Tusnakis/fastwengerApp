import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersListComponent } from './player/players-list/players-list.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
