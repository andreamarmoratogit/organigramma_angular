import { TestBed } from '@angular/core/testing';

import { DipServiceService } from './dip-service.service';

describe('DipServiceService', () => {
  let service: DipServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DipServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
