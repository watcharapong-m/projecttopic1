import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PLACES } from '@app/mock/mock-place';
import { Place } from '@app/model/place';

@Component({
  selector: 'app-all-place',
  templateUrl: './all-place.component.html',
  styleUrls: ['./all-place.component.css'],
})
export class AllPlaceComponent implements OnInit {
  // x = '';
  province: Place[] = PLACES;
  d: string [] = [];
  test1: string [] = [];

  test = [
    {
      id: 1,
      name: 'ขอนแก่น',
      place: [
        {
          id: 1,
          name: 'x',
          img: 'xxx'
        },
        {
          id: 2,
          name: 'y',
          img: 'xxx'
        },
      ]
    },
    {
      id: 2,
      name: 'ชัยภูมิ',
      place: [
        {
          id: 1,
          name: 'a',
          img: 'xxx'
        },
        {
          id: 2,
          name: 'b',
          img: 'xxx'
        },
      ]
    },
  ];

  constructor(private activateroute: ActivatedRoute) {}

  ngOnInit(): void {
    let x = this.activateroute.snapshot.params.dataObj;
    const obj =  JSON.parse(x);
    console.log('x =', x);

    // tslint:disable-next-line: forin
    for (const key in obj) {
      this.d = obj[key];
      // this.test1.push('2');
      // this.test1 = this.test[obj[key]].name[obj[key]];
      console.log('test =', this.test[obj[key]].place[obj[key]]);
      console.log('key obj =', this.d);
    }
    console.log('d =', this.d);

    if (this.province) {

    }
  }
}
