import { TestBed, inject } from '@angular/core/testing';

import { ResolvePeopleService } from './resolve-people.service';

describe('ResolvePeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolvePeopleService]
    });
  });

  it('should be created', inject([ResolvePeopleService], (service: ResolvePeopleService) => {
    expect(service).toBeTruthy();
  }));
});
