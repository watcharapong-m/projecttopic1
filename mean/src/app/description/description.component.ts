import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/shared/services';
import { PlaceService } from '@app/shared/services/place/place.service';
import { User } from '@app/shared/interfaces';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() user: User | null = null;

  getProvince = '';
  getName = '';
  province: any = [];
  place: any = [];
  prov: any = [];
  obj: any = [];

  name = '';
  message = '';

  constructor(
    private activateroute: ActivatedRoute,
    public route: Router,
    private placeService: PlaceService,
    private authService: AuthService
  ) { window.scroll(0, 0); }

  ngOnInit(): void {
    let x = this.activateroute.snapshot.params.dataObj;
    this.obj =  JSON.parse(x);
    console.log('obj =', this.obj);

    this.getProvince = this.obj.province;
    console.log('province =', this.getProvince);
    this.getName = this.obj.name;
    console.log('name =', this.getName);

    this.placeService.getProvinces().subscribe(data => {
      // อ่านค่าจาก JSON response ที่ส่งออกมา
      this.prov = data;
      for (let index = 0; index < this.prov.length; index++) {
        if (this.prov[index].province == this.getProvince) {
          console.log('data =', this.prov[index]);
          console.log('place =', this.prov[index].place);
          let j = this.prov[index].place.findIndex((item: any, i: any) => {
            return item.name === this.getName;
          });
          console.log('j =', j);
          this.place = this.prov[index].place[j];
          console.log('place =', this.place.name);

          // console.log(index, filteredObj);
          // let i = this.prov[index].province.findIndex(obj => obj.name === this.getName);
          // console.log('index =', i);
          // this.province = data[index].province;
          // this.place = data[index].place;
        }
      }
    });

    // tslint:disable-next-line: forin
    // for (const key in obj) {
    //   this.d = obj[key];
    //   console.log('d =', this.d);
    // }
    // console.log('d =', this.d);
  }

  submit() {
    console.log('name =', this.name);
    console.log('message =', this.message);
  }

}
