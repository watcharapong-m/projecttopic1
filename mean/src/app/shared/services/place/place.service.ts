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
  baseUrlReview = '/api/review';

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

  getReviews(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlReview}/all`);
  }

  postReviews(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrlReview}`, JSON.stringify(data));
  }
}
