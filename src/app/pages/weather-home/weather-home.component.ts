import {Component, OnInit} from '@angular/core';
import {WeatherHomeService} from '../../services/weather-home.service';
import {Observable} from 'rxjs';
import {Region, WeatherData} from '../../interfaces/weather.interface';
import {faCloudSunRain, faCompress, faTint, faWind, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit {
  weatherData: Observable<any>[] | undefined;
  regions: any[] | undefined;
  currentRegion: string | undefined;
  temp: number | undefined;
  condition: string | undefined;
  weatherIcon: IconDefinition | undefined;

  constructor(private weatherHomeService: WeatherHomeService) {
  }

  ngOnInit(): void {
    this.weatherIcon = faCloudSunRain;
    this.regions = ['Dar es Salaam', 'Manyara', 'Mbeya'];
    this.currentRegion = this.regions[0];
    // mapping the observables into one observable array
    this.weatherData = this.regions.map((region) => this.weatherHomeService.getRegionWeather(region));
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
  }

  getRegionTiles(data: any): WeatherData[] {
    if (data) {
      this.temp = data.main.temp;
      this.condition = data.weather[0].main;
      let tileData: WeatherData[];
      if (data.name === this.currentRegion) {
        tileData = [
          {
            icon: faWind,
            title: 'Wind',
            value: data.wind.speed,
            unit: 'km/h',
            foregroundColor: '#b43957',
            badgeColor: '#a52a44'
          },
          {
            icon: faCompress,
            title: 'Pressure',
            value: data.main.pressure,
            unit: 'hpa',
            foregroundColor: '#a64c71',
            badgeColor: '#923a5c'
          },
          {
            icon: faTint,
            title: 'Humidity',
            value: data.main.humidity,
            unit: '%',
            foregroundColor: '#a64c71',
            badgeColor: '#923a5c'
          },
        ];
        return tileData;
      }
    }

    return [];
  }

  getRegion(data: any): boolean {
    return data ? data.name === this.currentRegion : false;
  }
}
