import { TestBed } from '@angular/core/testing';

import { IdeasService } from './ideas.service';

describe('IdeasService', () => {
  let service: IdeasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
