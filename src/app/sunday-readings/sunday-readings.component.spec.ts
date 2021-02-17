import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayReadingsComponent } from './sunday-readings.component';

describe('SundayReadingsComponent', () => {
  let component: SundayReadingsComponent;
  let fixture: ComponentFixture<SundayReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SundayReadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SundayReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
