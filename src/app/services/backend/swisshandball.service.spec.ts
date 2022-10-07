import { TestBed } from '@angular/core/testing';

import { SwisshandballService } from './swisshandball.service';

describe('SwisshandballService', () => {
  let service: SwisshandballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwisshandballService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
});
