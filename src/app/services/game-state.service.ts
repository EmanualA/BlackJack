import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { DealerService } from './dealer.service';
import { StringEmitService } from './string-emit.service';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private playerScore: number = 0;
  private dealerScore: number = 0;
  private shuffledCards: Card[] = [];
  private playerCards: Card[] = [];
  private dealerCards: Card[] = [];

  constructor(
    private dealerService: DealerService,
    private siblingEmitService: StringEmitService
  ) {}

  public gameStart(): void {
    this.dealerService.freshDeck();
    this.shuffledCards = [...this.dealerService.getFullSetofCards];
    this.initialDistributeCard();
  }

  public initialDistributeCard(): void {
    this.setPlayerCards = this.shuffledCards[0];
    this.setDealerCards = this.shuffledCards[0];
    this.setPlayerCards = this.shuffledCards[0];
    this.setDealerCards = this.shuffledCards[0];
    this.dealerCards[1].setIsFlip = !this.dealerCards[1].getIsFlip;
    this.calculateDealerPlayerPoints();
  }

  public unHideDealerCard(): void {
    this.dealerCards[1].setIsFlip = !this.dealerCards[1].getIsFlip;
    // this.dealerCards[1].setIsFlip = false;
  }

  public calculateDealerPlayerPoints(): void {
    this.dealerScore = this.calculateDealerPoints();
    this.playerScore = this.calculatePlayerPoints();
  }
  private calculateDealerPoints(): number {
    let dealerScore: number = 0;
    this.dealerCards.forEach((card) => {
      dealerScore += card.getCardValue;
    });
    return dealerScore;
  }
  private calculatePlayerPoints(): number {
    let playerScore: number = 0;
    this.playerCards.forEach((card) => {
      playerScore += card.getCardValue;
    });
    return playerScore;
  }

  public reset(): void {
    this.playerScore = 0;
    this.dealerScore = 0;
    this.shuffledCards = [];
    this.playerCards = [];
    this.dealerCards = [];
  }

  public get getShuffledCards(): Card[] {
    return this.shuffledCards;
  }
  public get getPlayerCards(): Card[] {
    return this.playerCards;
  }
  public get getDealerCards(): Card[] {
    return this.dealerCards;
  }
  public get getPlayerScore(): number {
    return this.playerScore;
  }
  public get getDealerScore(): number {
    return this.dealerScore;
  }
  public set setDealerCards(card: Card) {
    this.dealerCards.push(card);
    this.shuffledCards.shift();
  }
  public set setPlayerCards(card: Card) {
    this.playerCards.push(card);
    this.shuffledCards.shift();
  }
}
