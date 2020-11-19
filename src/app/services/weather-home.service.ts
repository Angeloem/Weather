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
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=8e50c646468aecdc448cbacfcd3a3e79&units=metric`);
  }
}
