import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  baseUrlPlace = '/api/place';
  baseUrlPopularPlace = '/api/popularplace';
  baseUrlProvince = '/api/province';

  constructor(public http: HttpClient) { }

  getPlaces(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlPlace}/all`);
  }

  getPopularPlaces(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlPopularPlace}/all`);
  }

  getProvinces(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlProvince}/all`);
  }
  // postStudents(data): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(data), this.httpOptions);
  // }
}
