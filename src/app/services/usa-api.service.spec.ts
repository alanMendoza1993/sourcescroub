import { TestBed } from '@angular/core/testing';

import { UsaApiService } from './usa-api.service';

describe('UsaApiService', () => {
  let service: UsaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
