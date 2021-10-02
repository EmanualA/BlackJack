import { Injectable } from '@angular/core';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class DealerService {
  private cardTypes: string[] = ['hearts', 'diamond', 'spade', 'club'];
  private cardValues: string[] = [
    'jack',
    'queen',
    'king',
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ];
  private fullSetOfCards: Card[] = [];
  constructor() {
    this.freshDeck();
  }

  public get getFullSetofCards(): Card[] {
    return this.fullSetOfCards;
  }

  public freshDeck(): void {
    this.fullSetOfCards = this.shuffle<Card>(
      this.cardTypes
        .map((cardType) =>
          this.cardValues.map((cardValue) => new Card(cardType, cardValue))
        )
        .reduce((accumulator, list) => accumulator.concat(list))
    );
    this.fullSetOfCards = this.fullSetOfCards.filter(function (element) {
      return element !== undefined;
    });
  }

  private shuffle<T>(cardsToShuffle: T[]): T[] {
    let cardsToShuffleLength: number = cardsToShuffle.length,
      tempVarToShuffle: any;
    let randomNumber: number;
    while (0 !== cardsToShuffleLength) {
      randomNumber = Math.floor(Math.random() * cardsToShuffleLength);
      tempVarToShuffle = cardsToShuffle[cardsToShuffleLength];
      cardsToShuffle[cardsToShuffleLength] = cardsToShuffle[randomNumber];
      cardsToShuffle[randomNumber] = tempVarToShuffle;
      cardsToShuffleLength--;
    }
    return cardsToShuffle;
  }
}
