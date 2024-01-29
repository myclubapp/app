import { TestBed } from '@angular/core/testing';

import { HelferService } from './helfer.service';

describe('HelferService', () => {
  let service: HelferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
