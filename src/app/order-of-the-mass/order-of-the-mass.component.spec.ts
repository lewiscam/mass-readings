import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOfTheMassComponent } from './order-of-the-mass.component';

describe('OrderOfTheMassComponent', () => {
  let component: OrderOfTheMassComponent;
  let fixture: ComponentFixture<OrderOfTheMassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOfTheMassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOfTheMassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
