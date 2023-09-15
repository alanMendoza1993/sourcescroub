import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsaApiService {
  usaApi = 'https://datausa.io/api/data';
  constructor(private http: HttpClient) { 

  }

  getPopulation() {
    return this.http.get(`${this.usaApi}?drilldowns=State&measures=Population`);

  }
}
