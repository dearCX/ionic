import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IndexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IndexProvider {
  // private list:any
  category:any[]
  adBanner:any
  recommendGoods:any[]
  floor1: any[]
  floor2: any[]
  floor3: any[]
  floorName: any
  hotGoods: any[]
  bannerPicArray: any[]

  floorName1: string
  floorName2: string
  floorName3: string
  floor10: string
  floor11: string
  floor12: string

  floor20: string
  floor21: string
  floor22: string

  floor30: string
  floor31: string
  floor32: string
  floorMore1: any
  floorMore2: any
  floorMore3: any
  constructor(public http: HttpClient) {
    console.log('Hello IndexProvider Provider');
    this.getAllData()
  }
  getAllData() {
    let url: string = 'https://www.easy-mock.com/mock/5b84cf91f7615d46c8184b1e/smailMall/productList'
    this.http.get(url) 
      .subscribe(res => {
        if (res) {
          this.category = res['data'].category
          this.adBanner = res['data'].advertesPicture.PICTURE_ADDRESS
          this.bannerPicArray = res['data'].slides
          this.recommendGoods = res['data'].recommend
          this.floor1 = res['data'].floor1
          this.floor2 = res['data'].floor2
          this.floor3 = res['data'].floor3
          this.floorName = res['data'].floorName
          this.hotGoods = res['data'].hotGoods

          this.floorName1 = res['data'].floorName.floor1
          this.floorName2 = res['data'].floorName.floor2
          this.floorName3 = res['data'].floorName.floor3
          this.floor10 = this.floor1[0].image
          this.floor11 = this.floor1[1].image
          this.floor12 = this.floor1[2].image
          this.floor20 = this.floor2[0].image
          this.floor21 = this.floor2[1].image
          this.floor22 = this.floor2[2].image
          this.floor30 = this.floor3[0].image
          this.floor31 = this.floor3[1].image
          this.floor32 = this.floor3[2].image
          this.floorMore1 = res['data'].floor1.slice(3)
          this.floorMore2 = res['data'].floor2.slice(3)
          this.floorMore3 = res['data'].floor3.slice(3)
        }
      })
  }
}
