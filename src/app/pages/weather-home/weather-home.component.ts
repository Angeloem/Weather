import {Component, OnInit} from '@angular/core';
import {WeatherHomeService} from '../../services/weather-home.service';
import {Observable} from 'rxjs';
import {Region} from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit {
  weatherData: Observable<any>[] | undefined;
  regions: any[] | undefined;
  currentRegion: string | undefined;

  constructor(private weatherHomeService: WeatherHomeService) {
  }

  ngOnInit(): void {
    this.regions = ['Dar es Salaam', 'Manyara', 'Mbeya'];
    this.currentRegion = this.regions[0];
    // mapping the observables into one observable array
    this.weatherData = this.regions.map((region) => this.weatherHomeService.getRegionWeather(region));
    this.weatherData?.forEach((el) => el.subscribe(res => console.log(res)));
  }

  getRegionStats(regionStats: any): Region | undefined {
    return regionStats !== null ?
      {
        name: regionStats.name,
        latitude: regionStats.coord.lat,
        longitude: regionStats.coord.lon,
      } : undefined;
  }

  regionChanged($event: any): void {
    this.currentRegion = $event;
    console.log(this.currentRegion);
  }
}
