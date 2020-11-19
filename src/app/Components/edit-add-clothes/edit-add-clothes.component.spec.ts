import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddClothesComponent } from './edit-add-clothes.component';

describe('EditAddClothesComponent', () => {
  let component: EditAddClothesComponent;
  let fixture: ComponentFixture<EditAddClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
