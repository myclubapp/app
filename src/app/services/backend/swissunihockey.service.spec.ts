import { TestBed } from '@angular/core/testing';

import { SwissunihockeyService } from './swissunihockey.service';

describe('SwissunihockeyService', () => {
  let service: SwissunihockeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwissunihockeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
