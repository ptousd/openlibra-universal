import { TestBed } from '@angular/core/testing';

import { OpenlibraService } from './openlibra.service';

describe('OpenlibraService', () => {
  let service: OpenlibraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenlibraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
