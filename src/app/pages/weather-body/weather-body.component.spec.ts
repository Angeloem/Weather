import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBodyComponent } from './weather-body.component';

describe('WeatherBodyComponent', () => {
  let component: WeatherBodyComponent;
  let fixture: ComponentFixture<WeatherBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
