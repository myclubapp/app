import { TestBed } from '@angular/core/testing';

import { SwissvolleyService } from './swissvolley.service';

describe('SwissvolleyService', () => {
  let service: SwissvolleyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwissvolleyService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
});
