import { TestBed } from '@angular/core/testing';

import { ClerkResolver } from './clerk.resolver';

describe('ClerkResolver', () => {
  let resolver: ClerkResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ClerkResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
