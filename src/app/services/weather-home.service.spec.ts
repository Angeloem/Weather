import { TestBed } from '@angular/core/testing';

import { WeatherHomeService } from './weather-home.service';

describe('WeatherHomeService', () => {
  let service: WeatherHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
