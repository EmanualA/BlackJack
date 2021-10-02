import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-card-slot',
  templateUrl: './card-slot.component.html',
  styleUrls: ['./card-slot.component.css'],
})
export class CardSlotComponent implements OnInit {
  @Input()
  card: any | Card;

  constructor() {}

  ngOnInit(): void {}
}
