import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  searchForm: FormGroup;
  options: string[] = ['London, uk', 'Paris, Fr', 'Mumbai, In'];
  public weatherData: any;
  public isSearchSuccess = false;
  public isSearchFailed = false;
  public forecastData: any;
  public startLoading = false;
  locationRegex = "^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$";
  // || ^(.+)[,\\s]+(.+?)\s*(\d{5})?$";

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherDataService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      location: ['', [Validators.required, Validators.pattern(this.locationRegex)]]
    });
  }

  sendToWeatherAPI(formValues) {
    this.startLoading = true;
    this.isSearchSuccess = false;
    this.isSearchFailed = false;

    this.weatherService.getWeatherDetails(formValues.location).subscribe(data => {
      if("error" in data) {
        this.isSearchFailed = true;
      } else {
        this.weatherData = data;
        this.isSearchSuccess = true;        
      }
      
      this.startLoading = false;
      console.log(this.weatherData, this.forecastData);
    });
  }
}
