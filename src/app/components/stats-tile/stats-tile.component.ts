import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from '../../interfaces/weather.interface';


@Component({
  selector: 'app-stats-tile',
  templateUrl: './stats-tile.component.html',
  styleUrls: ['./stats-tile.component.scss']
})
export class StatsTileComponent implements OnInit {
  @Input() tile: WeatherData[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  getStyles(color: string): any {
    return {
      background: color,
    };
  }
}
