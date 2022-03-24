import { TestBed } from '@angular/core/testing';

import { SwissturnverbandService } from './swissturnverband.service';

describe('SwissturnverbandService', () => {
  let service: SwissturnverbandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwissturnverbandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
