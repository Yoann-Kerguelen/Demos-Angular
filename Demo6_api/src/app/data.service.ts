import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "https://randomuser.me/api/";

  constructor(private http: HttpClient) {
    console.log("Service");
  }

  getPeople() {
    return this.http.get(this.url);
  }

}
