import { NgModule } from '@angular/core';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayersListComponent } from './players-list.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PlayerRoutingModule } from './player-routing.module';



@NgModule({
  declarations: [
    PlayerDetailComponent,
    PlayersListComponent
  ],
  imports: [
    SharedModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
