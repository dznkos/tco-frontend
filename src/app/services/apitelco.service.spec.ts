import { TestBed } from '@angular/core/testing';

import { ApitelcoService } from './apitelco.service';

describe('ApitelcoService', () => {
  let service: ApitelcoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitelcoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
