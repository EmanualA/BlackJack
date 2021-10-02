import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class StringEmitService {
  private subject = new BehaviorSubject<any>('');

  public emit<T>(data: T) {
    this.subject.next(data);
  }

  public on<T>(): Observable<T> {
    return this.subject.asObservable();
  }

  public stringEmittingMethod(
    message: string,
    stringEmitService: StringEmitService
  ): void {
    stringEmitService.emit<string>(message);
  }

  // public cardEmittingMethod(
  //   cards: Card[],
  //   siblingEmitService: SiblingEmitService
  // ): void {
  //   siblingEmitService.emit<Card[]>(cards);
  // }
}
