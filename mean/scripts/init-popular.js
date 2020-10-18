const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');

const config = require('../server/config/config');

const PopularPlace = require('../server/models/popularPlace.model');

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { keepAlive: 1 });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// const place = [];


const popularplaces = [
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

PopularPlace.insertMany(popularplaces, (error, docs) => {
  if (error) {
    console.error(error);
  } else {
    console.log(docs);
  }
  mongoose.connection.close();
});

// Place.deleteMany({}, (error, docs) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(docs);
//   }
//   mongoose.connection.close();
// });
