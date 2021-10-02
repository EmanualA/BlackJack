import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { DealerCardEmitService } from '../services/dealer-card-emit.service';

@Component({
  selector: 'app-dealer-details',
  templateUrl: './dealer-details.component.html',
  styleUrls: ['./dealer-details.component.css'],
})
export class DealerDetailsComponent implements OnInit {
  dealerCards: Card[] = [];
  constructor(private dealerCardEmitService: DealerCardEmitService) {}

  ngOnInit(): void {
    this.dealerCardEmitService.on<Card[]>().subscribe((data) => {
      this.dealerCards = data;
    });
  }
}
