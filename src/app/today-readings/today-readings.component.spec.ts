import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayReadingsComponent } from './today-readings.component';

describe('TodayReadingsComponent', () => {
  let component: TodayReadingsComponent;
  let fixture: ComponentFixture<TodayReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayReadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
