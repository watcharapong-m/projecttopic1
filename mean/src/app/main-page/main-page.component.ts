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
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/02/DEW_7430-800x533.jpg',
      totalPlace: '02'
    },
    {
      id: 2,
      name: 'ชัยภูมิ',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJp3DzPvMvzFSsWv0yS22ReeBZ4ykRLZ9hbQ&usqp=CAU',
      totalPlace: '01'
    },
    {
      id: 3,
      name: 'นครพนม',
      img: 'https://www.paiduaykan.com/province/Northeast/nakhonphanom/pic/payanak3.jpg',
      totalPlace: '03'
    },
    {
      id: 4,
      name: 'นครราชสีมา',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2016/12/DSC_4762.jpg',
      totalPlace: '01'
    },
    {
      id: 5,
      name: 'บึงกาฬ',
      img: 'https://www.paiduaykan.com/province/Northeast/bungkan/pic/phutok23.jpg',
      totalPlace: '04'
    },
    {
      id: 6,
      name: 'มุกดาหาร',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2019/12/1-SON06932-800x533.jpg',
      totalPlace: '01'
    },
    {
      id: 7,
      name: 'ยโสธร',
      img: 'https://www.paiduaykan.com/province/Northeast/yasothon/pic/bansingtha.jpg',
      totalPlace: '02'
    },
    {
      id: 8,
      name: 'ร้อยเอ็ด',
      img: 'https://paiduaykan.com/province/Northeast/roiet/pic/prajadeechaimongkol2.jpg',
      totalPlace: '04'
    },
    {
      id: 9,
      name: 'เลย',
      img: 'https://www.paiduaykan.com/province/Northeast/loie/pic/phupapoh.jpg',
      totalPlace: '05'
    },
    {
      id: 10,
      name: 'ศรีสะเกษ',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2019/10/1-DEW_6335-800x533.jpg',
      ttotalPlace: '02'
    },
    {
      id: 11,
      name: 'สกลนคร',
      img: 'https://www.paiduaykan.com/province/Northeast/sakonnakhon/pic/lotusmuseum.jpg',
      totalPlace: '01'
    },
    {
      id: 12,
      name: 'หนองคาย',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2020/01/3-SON09363-800x533.jpg',
      totalPlace: '02'
    },
    {
      id: 13,
      name: 'หนองบัวลำภู',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/10/%E0%B8%9B%E0%B8%81%E0%B8%96%E0%B9%89%E0%B8%B3%E0%B8%9C%E0%B8%B2%E0%B9%80%E0%B8%88%E0%B8%B2%E0%B8%B0-800x534.jpg',
      totalPlace: '02'
    },
    {
      id: 14,
      name: 'อุดรธานี',
      img: 'https://travel.mthai.com/app/uploads/2013/09/I-San-Photo-Contest-2012_consolation-prize_01-B.jpg',
      totalPlace: '03'
    },
    {
      id: 15,
      name: 'อุบลราชธานี',
      img: 'https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/watsirintorn3.jpg',
      totalPlace: '07'
    },
  ];

  PopularPlaces = [
    {
      id: 1,
      name: 'ผาชะนะได',
      province: 'อุบลราชธานี',
      img: 'http://travel.mthai.com/app/uploads/2012/10/phachanadai1.jpg',
    },
    {
      id: 2,
      name: 'เชียงคาน',
      province: 'เลย',
      img: 'https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan1.jpg',
    },
    {
      id: 3,
      name: ' ทะเลบัวแดง',
      province: 'อุดรธานี',
      img: 'https://travel.mthai.com/app/uploads/2013/09/I-San-Photo-Contest-2012_consolation-prize_01-B.jpg',
    },
    {
      id: 4,
      name: 'วัดพระธาตุหนองแวง',
      province: 'ขอนแก่น',
      img: 'https://www.paiduaykan.com/province/Northeast/khonkaen/pic/pratadnongwang.jpg',
    },
    {
      id: 5,
      name: 'สะพานมิตรภาพไทย-ลาว 3',
      province: 'นครพนม',
      img: 'https://www.paiduaykan.com/province/Northeast/nakhonphanom/pic/thailaosbridge1.jpg',
    },
    {
      id: 6,
      name: 'ภูทอก',
      province: 'บึงกาฬ',
      img: 'https://www.paiduaykan.com/province/Northeast/bungkan/pic/phutok8.jpg'
    },
    {
      id: 7,
      name: 'วัดภูมโนรมย์',
      province: 'มุกดาหาร',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2019/12/1-SON06932-800x533.jpg',
      totalPlace: '02'
    },
    {
      id: 8,
      name: 'พิพิธภัณฑ์พญาคันคาก',
      province: 'ยโสธร',
      img: 'https://www.paiduaykan.com/province/Northeast/yasothon/pic/phayakunkakmuseum.jpg',
    },
    {
      id: 9,
      name: 'พระเจดีย์มิ่งมงคล',
      province: 'ร้อยเอ็ด',
      img: 'https://paiduaykan.com/province/Northeast/roiet/pic/prajadeechaimongkol2.jpg',
    },
    {
      id: 10,
      name: 'ผามออีแดง',
      province: 'ศรีสะเกษ',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2019/10/1-DEW_6335-800x533.jpg',
    },
    {
      id: 11,
      name: 'ถ้ำผาเจาะ',
      province: 'หนองบัวลำภู',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2018/10/%E0%B8%9B%E0%B8%81%E0%B8%96%E0%B9%89%E0%B8%B3%E0%B8%9C%E0%B8%B2%E0%B9%80%E0%B8%88%E0%B8%B2%E0%B8%B0-800x534.jpg',
    },
    {
      id: 12,
      name: 'วัดผาตากเสื้อ',
      province: 'หนองคาย',
      img: 'https://www.paiduaykan.com/travel/wp-content/uploads/2020/01/1-SON08841-800x533.jpg',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
