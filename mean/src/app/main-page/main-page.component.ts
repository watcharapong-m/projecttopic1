import { Province } from './../model/province';
// import { Place } from '@app/model/place';
import { POPULARPLACES } from './../mock/mock-popular-place';
import { PLACES } from './../mock/mock-place';
import { Place, Popular } from './../model/place';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // province: Place[] = PLACES;
  // PopularPlaces: Popular[] = POPULARPLACES;
  x = '';

  place: any = [];
  popularplaces: any = [];
  province: any = [];

  test = [
    {
      id: 1,
      place: [
        {
          id: 1,
          name: 'x'
        },
        {
          id: 2,
          name: 'y'
        },
      ]
    },
    {
      id: 2,
      place: [
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        },
      ]
    },
  ];

  constructor(public route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    // this.x = this.test[0].name;
    console.log(this.test[0].place);
    // console.log('province =', this.province);

    this.http.get('/api/place/all').subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.place = data;
      console.log('data place =', data);
      console.log('place =', this.place);
    });

    this.http.get('/api/popularplace/all').subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.popularplaces = data;
      console.log('data popular =', data);
      console.log('popular place =', this.popularplaces);
    });

    this.http.get('/api/province/all').subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.province = data;
      console.log('data province =', data);
      console.log('province =', this.province);
    });
  }

  goto(id: number) {
    console.log('test', id + 1);
    console.log(this.place[id]);

    const dataObj = {
      index: id,
    };
    const dataString = JSON.stringify(dataObj);
    console.log(dataString);
    this.route.navigate(['province', dataString]);
    console.log('dataObj = ' + id);
  }

}
