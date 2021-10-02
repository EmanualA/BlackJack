import { TestBed } from '@angular/core/testing';

import { PlayerCardEmitService } from './player-card-emit.service';

describe('PlayerCardEmitService', () => {
  let service: PlayerCardEmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCardEmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
