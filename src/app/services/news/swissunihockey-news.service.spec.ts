import { TestBed } from '@angular/core/testing';

import { SwissunihockeyNewsService } from './swissunihockey-news.service';

describe('SwissunihockeyNewsService', () => {
  let service: SwissunihockeyNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwissunihockeyNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
