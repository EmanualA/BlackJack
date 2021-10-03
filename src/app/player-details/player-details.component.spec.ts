import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { Card } from '../model/card';
import { PlayerCardEmitService } from '../services/player-card-emit.service';

import { PlayerDetailsComponent } from './player-details.component';

describe('PlayerDetailsComponent', () => {
  let component: PlayerDetailsComponent;
  let fixture: ComponentFixture<PlayerDetailsComponent>;
  const mockCardList: Card[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing subscribe method is being called', fakeAsync(() => {
    let mockPlayerEmitService = TestBed.get(PlayerCardEmitService);

    let cardEmitSpy = spyOn(mockPlayerEmitService, 'on').and.returnValue(
      of(mockCardList)
    );
    let subSpy = spyOn(mockPlayerEmitService.on(), 'subscribe');
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    tick();
    expect(cardEmitSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));
});
