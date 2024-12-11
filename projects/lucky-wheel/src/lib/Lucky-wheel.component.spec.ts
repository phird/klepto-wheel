import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyWheelComponent } from './Lucky-wheel.component';

describe('NgxWheelComponent', () => {
  let component: LuckyWheelComponent;
  let fixture: ComponentFixture<LuckyWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
