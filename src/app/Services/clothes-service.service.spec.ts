import { TestBed } from '@angular/core/testing';

import { ClothesServiceService } from './clothes-service.service';

describe('ClothesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothesServiceService = TestBed.get(ClothesServiceService);
    expect(service).toBeTruthy();
  });
});
