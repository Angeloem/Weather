import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export interface WeatherData {
  icon: IconDefinition;
  value: string;
  title: string;
  unit: string;
  foregroundColor: string;
  badgeColor: string;
}

export interface Region {
  name: string;
  latitude: number;
  longitude: number;
}
