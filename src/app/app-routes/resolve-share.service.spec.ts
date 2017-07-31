import { TestBed, inject } from '@angular/core/testing';

import { ResolveShareService } from './resolve-share.service';

describe('ResolveShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveShareService]
    });
  });

  it('should be created', inject([ResolveShareService], (service: ResolveShareService) => {
    expect(service).toBeTruthy();
  }));
});
