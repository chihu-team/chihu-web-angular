import { TestBed, inject } from '@angular/core/testing';

import { ResolveArticleService } from './resolve-article.service';

describe('ResolveArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveArticleService]
    });
  });

  it('should be created', inject([ResolveArticleService], (service: ResolveArticleService) => {
    expect(service).toBeTruthy();
  }));
});
