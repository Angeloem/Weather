import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherHomeService} from '../../services/weather-home.service';
import {WeatherData} from '../../interfaces/weather.interface';
import {faCloudSunRain, faCompress, faTint, faWind, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-body',
  templateUrl: './weather-body.component.html',
  styleUrls: ['./weather-body.component.scss']
})
export class WeatherBodyComponent implements OnInit {
  currentRegion: string | undefined;
  temp: number | undefined;
  condition: string | undefined;
  weatherIcon: IconDefinition | undefined;
  private weatherInfo: any;

  constructor(
    private router: ActivatedRoute,
    private service: WeatherHomeService) {
  }

  ngOnInit(): void {
    this.weatherIcon = faCloudSunRain;
    this.router.params.subscribe(res => {
      this.currentRegion = res.region;
      this.weatherInfo = this.service.getRegionWeather(res.region);
    });
  }

  getRegionTiles(data: any): WeatherData[] {
    if (data) {
      this.temp = data.main.temp;
      this.condition = data.weather[0].main;
      let tileData: WeatherData[];
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

    return [];
  }
}
