import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingBasketComponent } from './shoping-basket.component';

describe('ShopingBasketComponent', () => {
  let component: ShopingBasketComponent;
  let fixture: ComponentFixture<ShopingBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
