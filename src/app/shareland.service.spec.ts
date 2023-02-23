import { TestBed } from '@angular/core/testing';

import { SharelandService } from './shareland.service';

describe('SharelandService', () => {
  let service: SharelandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharelandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
