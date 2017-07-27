import { TestBed, inject } from '@angular/core/testing';

import { CanActivateService } from './can-activate.service';

describe('CanActivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateService]
    });
  });

  it('should be created', inject([CanActivateService], (service: CanActivateService) => {
    expect(service).toBeTruthy();
  }));
});
