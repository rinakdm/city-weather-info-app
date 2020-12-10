import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../config.json';
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getWeatherDetails(location) {
    return this.http.get(
      data.apiurl + '?access_key='+ data.api_key +'&query=' + location
    );
  }
}
