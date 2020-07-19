import { TestBed } from '@angular/core/testing';

import { OrganigrammaService } from './organigramma.service';

describe('OrganigrammaService', () => {
  let service: OrganigrammaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganigrammaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
