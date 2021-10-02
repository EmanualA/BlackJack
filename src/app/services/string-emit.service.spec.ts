import { TestBed } from '@angular/core/testing';

import { StringEmitService } from './string-emit.service';

describe('SiblingEmitService', () => {
  let service: StringEmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringEmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
