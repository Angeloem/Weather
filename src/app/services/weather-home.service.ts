import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherHomeService {
  constructor(private http: HttpClient) {
  }

  getRegionWeather(region: string): Observable<any>{
    const apiKey = '8e50c646468aecdc448cbacfcd3a3e79';
    const apiKey1 = '9a5876733642857220dba4985c00e84c';
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${apiKey1}&units=metric`);
  }
}
