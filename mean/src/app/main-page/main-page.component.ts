import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from '@app/shared/services/place/place.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  place: any = [];
  popularplaces: any = [];

  constructor(public route: Router, private placeService: PlaceService) {
    // window.location.reload();
    window.scroll(0, 0);
  }

  ngOnInit(): void {

    // window.location.reload();

    this.placeService.getPlaces().subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.place = data;
    });

    this.placeService.getPopularPlaces().subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.popularplaces = data;
    });
  }

  goto(id: number) {
    const dataObj = {
      index: id + 1,
    };
    const dataString = JSON.stringify(dataObj);
    this.route.navigate(['province', dataString]);
  }

  gotoDescription(province: string, name: string) {
    const dataObj = {
      province: province,
      name: name
    };
    const dataString = JSON.stringify(dataObj);
    this.route.navigate(['description', dataString]);
  }

}
