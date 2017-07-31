import { TestBed, inject } from '@angular/core/testing';

import { ResolveWorkService } from './resolve-work.service';

describe('ResolveWorkServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveWorkService]
    });
  });

  it('should be created', inject([ResolveWorkService], (service: ResolveWorkService) => {
    expect(service).toBeTruthy();
  }));
});
