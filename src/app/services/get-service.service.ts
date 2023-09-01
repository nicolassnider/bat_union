import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  private baseUrl = 'https://bat-api.onrender.com/'
  constructor(private http:HttpClient) { }
  getBatData(){
    return this.http.get(this.baseUrl)
  }
}
