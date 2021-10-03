import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { StringEmitService } from '../services/string-emit.service';

import { GameResultComponent } from './game-result.component';

describe('GameResultComponent', () => {
  let component: GameResultComponent;
  let fixture: ComponentFixture<GameResultComponent>;
  const mockResultMessage: string = 'Player Win';
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing subscribe method is being called', fakeAsync(() => {
    let mockStringEmitService = TestBed.get(StringEmitService);

    let cardEmitSpy = spyOn(mockStringEmitService, 'on').and.returnValue(
      of(mockResultMessage)
    );
    let subSpy = spyOn(mockStringEmitService.on(), 'subscribe');
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    tick();
    expect(cardEmitSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));
});
