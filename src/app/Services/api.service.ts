import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get('https://01.fy25ey01.64mb.io/');
  }
}
