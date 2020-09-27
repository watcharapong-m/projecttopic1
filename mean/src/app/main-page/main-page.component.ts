import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  province = [
    {
      id: 1,
      name: 'ขอนแก่น',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/02/DEW_7453-800x533.jpg'
    },
    {
      id: 2,
      name: 'ชัยภูมิ',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/02/DEW_7453-800x533.jpg'
    },
    {
      id: 3,
      name: 'นครพนม',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/02/DEW_7453-800x533.jpg'
    },
    {
      id: 4,
      name: 'นครราชสีมา',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/02/DEW_7453-800x533.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
