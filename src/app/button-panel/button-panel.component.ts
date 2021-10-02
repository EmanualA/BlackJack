import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../model/card';
import { DealerCardEmitService } from '../services/dealer-card-emit.service';

import { GameStateService } from '../services/game-state.service';
import { PlayerCardEmitService } from '../services/player-card-emit.service';
import { StringEmitService } from '../services/string-emit.service';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css'],
})
export class ButtonPanelComponent implements OnInit {
  constructor(
    private gameStateService: GameStateService,
    private siblingEmitService: StringEmitService,
    private dealerCardEmitService: DealerCardEmitService,
    private playerCardEmitService: PlayerCardEmitService
  ) {}

  hitButtonValue: string = 'Hit';
  startButtonValue: string = 'Start';
  stayButtonValue: string = 'Stay';
  resetButtonValue: string = 'Reset';

  isStartedGame: boolean = false;
  gameResult: string = '';

  public start(): void {
    this.isStartedGame = !this.isStartedGame;
    this.gameStateService.gameStart();
    this.gameResult = 'Yet to start Play';
    this.messageEmit(this.gameResult);
    this.dealerCardEmit(this.gameStateService.getDealerCards);
    this.playerCardEmit(this.gameStateService.getPlayerCards);
  }

  public stay(): void {
    this.gameStateService.unHideDealerCard();
    this.dealerCardEmit(this.gameStateService.getDealerCards);
    while (this.gameStateService.getDealerScore <= 17) {
      this.gameStateService.setDealerCards =
        this.gameStateService.getShuffledCards[0];
      this.gameStateService.calculateDealerPlayerPoints();
      this.dealerCardEmit(this.gameStateService.getDealerCards);
    }
    this.gameResult = this.determineResultText();

    this.messageEmit(this.gameResult);

    this.reset();
  }

  public hit(): void {
    this.gameResult = 'Game in progress';
    this.messageEmit(this.gameResult);

    this.gameStateService.setPlayerCards =
      this.gameStateService.getShuffledCards[0];
    this.gameStateService.calculateDealerPlayerPoints();
    this.playerCardEmit(this.gameStateService.getPlayerCards);

    if (this.gameStateService.getPlayerScore > 21) {
      this.gameResult = 'Bust';
      this.gameStateService.unHideDealerCard();
      this.messageEmit(this.gameResult);
      this.dealerCardEmit(this.gameStateService.getDealerCards);
      this.reset();
    }
  }

  public reset(): void {
    this.gameStateService.reset();
    this.isStartedGame = !this.isStartedGame;
  }

  private messageEmit(message: string): void {
    this.siblingEmitService.stringEmittingMethod(
      message,
      this.siblingEmitService
    );
  }

  private dealerCardEmit(cards: Card[]): void {
    this.dealerCardEmitService.cardEmittingMethod(
      cards,
      this.dealerCardEmitService
    );
  }

  private playerCardEmit(cards: Card[]): void {
    this.playerCardEmitService.cardEmittingMethod(
      cards,
      this.playerCardEmitService
    );
  }

  private determineResultText(): string {
    let returnString: string = '';

    if (
      this.gameStateService.getDealerScore < 22 &&
      this.gameStateService.getDealerScore >
        this.gameStateService.getPlayerScore
    ) {
      returnString = 'Player lose!';
    } else if (
      this.gameStateService.getDealerScore < 22 &&
      this.gameStateService.getDealerScore <
        this.gameStateService.getPlayerScore
    ) {
      returnString = 'Player win!';
    } else if (
      this.gameStateService.getDealerScore < 22 &&
      this.gameStateService.getDealerScore ===
        this.gameStateService.getPlayerScore
    ) {
      returnString = 'Draw!';
    } else {
      returnString = 'Player win!';
    }

    return returnString;
  }

  ngOnInit(): void {}
}
