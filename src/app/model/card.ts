export class Card {
  private cardValue: number;
  private isFlip: boolean;

  constructor(private cardType: string, private cardFace: string) {
    this.cardType = cardType;
    this.cardFace = cardFace;
    this.isFlip = false;
    this.cardValue = this.getCardValue;
  }

  public get getCardtype(): string {
    return this.cardType;
  }

  public get getCardFace(): string {
    return this.cardFace;
  }

  public get getCardValue(): number {
    return this.cardFace === 'king' ||
      this.cardFace === 'queen' ||
      this.cardFace === 'jack'
      ? 10
      : this.cardFace === 'A'
      ? 11
      : Number(this.cardFace);
  }

  public get getIsFlip(): boolean {
    return this.isFlip;
  }

  public set setIsFlip(isFlip: boolean) {
    this.isFlip = isFlip;
  }
}
