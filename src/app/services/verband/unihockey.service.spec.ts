import {TestBed} from '@angular/core/testing';

import {UnihockeyService} from './unihockey.service';

describe('UnihockeyService', () => {
  let service: UnihockeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnihockeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
