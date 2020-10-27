import { BaseHtmlComponent } from './../../../base-html/base-html.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  baseUrlComment = '/api/comment';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

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

  getComments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlComment}/all`);
  }

  postReviews(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrlReview}`, data, this.httpOptions);
  }

  postComments(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrlComment}`, data);
  }

  updateComment(data: any): Observable<any> {
    return this.http.put(`${this.baseUrlComment}/update/${data._id}`, data);
  }
}
