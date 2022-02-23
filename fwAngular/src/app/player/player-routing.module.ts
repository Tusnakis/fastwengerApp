import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './players-list.component';
import { PlayerDetailComponent } from './player-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: PlayersListComponent
  },
  {
    path: 'detail/:slug',
    component: PlayerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
