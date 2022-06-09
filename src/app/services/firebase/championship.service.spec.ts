import { TestBed } from '@angular/core/testing';

import { ChampionshipService } from './championship.service';

describe('ChampionshipService', () => {
  let service: ChampionshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
