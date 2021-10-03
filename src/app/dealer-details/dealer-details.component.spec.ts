import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Card } from '../model/card';
import { DealerCardEmitService } from '../services/dealer-card-emit.service';
import { DealerDetailsComponent } from './dealer-details.component';

describe('DealerDetailsComponent', () => {
  let component: DealerDetailsComponent;
  let fixture: ComponentFixture<DealerDetailsComponent>;
  const mockCardList: Card[] = [
    new Card('hearts', '10'),
    new Card('spade', '5'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealerDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing subscribe method is being called', fakeAsync(() => {
    let mockDealerEmitService = TestBed.get(DealerCardEmitService);

    let cardEmitSpy = spyOn(mockDealerEmitService, 'on').and.returnValue(
      of(mockCardList)
    );
    let subSpy = spyOn(mockDealerEmitService.on(), 'subscribe');
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    tick();
    expect(cardEmitSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));
});
