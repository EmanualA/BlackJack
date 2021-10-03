import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from '../model/card';

import { CardSlotComponent } from './card-slot.component';

describe('CardSlotComponent', () => {
  let component: CardSlotComponent;
  let fixture: ComponentFixture<CardSlotComponent>;
  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSlotComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSlotComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement;

    app.componentInstance.card = new Card('hearts', '5');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test card displayed as received when IsFlip is false', () => {
    app.componentInstance.card.setIsFlip = false;
    const cardElement: HTMLElement = fixture.nativeElement;
    expect(cardElement.textContent).toContain(
      app.componentInstance.card.getCardFace +
        ' - ' +
        app.componentInstance.card.getCardtype
    );
  });

  it('test card displayed as received when IsFlip is true', () => {
    app.componentInstance.card.setIsFlip = true;
    const cardElement: HTMLElement = fixture.nativeElement;
    expect(cardElement.textContent).toContain('hidden');
  });
});
