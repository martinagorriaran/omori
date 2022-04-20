import { TestBed } from '@angular/core/testing';

import { TService } from './t.service';

describe('TService', () => {
  let service: TService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
