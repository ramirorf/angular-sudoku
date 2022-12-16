import { TestBed } from '@angular/core/testing';

import { SortCollectionService } from './sort-collection.service';

describe('SortCollectionService', () => {
  let service: SortCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
