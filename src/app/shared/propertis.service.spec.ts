import { TestBed } from '@angular/core/testing';

import { PropertyService } from '../shared/propertis.service';

describe('PropertisService', () => {
  let service: PropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
