import { TestBed } from '@angular/core/testing';

import { ShopingBasketService } from './shoping-basket.service';

describe('ShopingBasketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopingBasketService = TestBed.get(ShopingBasketService);
    expect(service).toBeTruthy();
  });
});
