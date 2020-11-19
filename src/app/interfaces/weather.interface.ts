export interface WeatherInterface {
  temp: number;
  condition: string;
  data: WeatherData[];
}

export interface WeatherData {
  icon: any;
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
