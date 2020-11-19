import {Component, OnInit} from '@angular/core';
import {WeatherHomeService} from '../../services/weather-home.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit {
  weatherData: Observable<any> | undefined;

  constructor(private weatherHomeService: WeatherHomeService) {
  }

  ngOnInit(): void {
    this.weatherData = this.weatherHomeService.getRegionWeather('Dar es Salaam');
    this.weatherData.subscribe(res => console.log(res), error => console.log(error));
  }

}
