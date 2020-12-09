import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  // http://api.weatherstack.com/forecast?access_key=df8fd8c2a5fba814a9793556e960dd0d&query=London
  constructor(private http: HttpClient) {}

  getWeatherDetails(location) {
    return this.http.get(
      'http://api.weatherstack.com/forecast?access_key=df8fd8c2a5fba814a9793556e960dd0d&query=' + location
    );
  }
}
