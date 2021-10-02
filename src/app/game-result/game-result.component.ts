import { Component, OnInit } from '@angular/core';
import { StringEmitService } from '../services/string-emit.service';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css'],
})
export class GameResultComponent implements OnInit {
  resultMessage: string = '';

  constructor(private siblingEmitService: StringEmitService) {}

  ngOnInit(): void {
    this.siblingEmitService.on<string>().subscribe((data) => {
      this.resultMessage = data;
    });
  }
}
