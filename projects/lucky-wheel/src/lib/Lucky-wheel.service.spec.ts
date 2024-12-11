import { TestBed } from '@angular/core/testing';

import { LuckywheelService } from './Lucky-wheel.service';

describe('NgxWheelIvyService', () => {
  let service: LuckywheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuckywheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
