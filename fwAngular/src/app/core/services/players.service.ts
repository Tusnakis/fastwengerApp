import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers(idPosition: number) {
    return this.http.get('http://localhost:3009/players/' + idPosition);
  }

  getPlayer(slug: string) {
    return this.http.get('http://localhost:3009/player/' + slug);
  }
}
