import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { PlayerCardEmitService } from '../services/player-card-emit.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
})
export class PlayerDetailsComponent implements OnInit {
  playerName: string = 'Player';
  playerCards: Card[] = [];

  constructor(private playerCardEmitService: PlayerCardEmitService) {}

  ngOnInit(): void {
    this.playerCardEmitService.on<Card[]>().subscribe((data) => {
      this.playerCards = data;
    });
  }
}
