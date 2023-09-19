import { TestBed } from '@angular/core/testing';

import { LoadcsvService } from './loadcsv.service';

describe('LoadcsvService', () => {
  let service: LoadcsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadcsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
