import { TestBed } from '@angular/core/testing';

import { DealerCardEmitService } from './dealer-card-emit.service';

describe('DealerCardEmitService', () => {
  let service: DealerCardEmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealerCardEmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
