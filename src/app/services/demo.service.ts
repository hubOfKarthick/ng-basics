import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get(
      // './assets/students.json'
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
