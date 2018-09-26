import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MorePage } from './../more/more'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  title:string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title')
    //当参数没有定义的情况
    if(this.title === undefined){
      this.title = "没有获取到结果";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  // ionViewWillEnter(){
  //   let elements = document.querySelectorAll(".tabbar")
  //   if (elements != null) {
  //      Object.keys(elements).map((key) => {
  //         elements[key].style.display = 'none'
  //      })
  //   }  
  // }
  // ionViewWillLeave() {
  //   let elements = document.querySelectorAll(".tabbar")
  //   if (elements != null) {
  //     Object.keys(elements).map((key) => {
  //       elements[key].style.display = 'flex'
  //     })
  //   }
  // }   
  goMore(){
    this.navCtrl.push(MorePage)
    // this.navCtrl.popToRoot() //跳转回根页面
  }
  back(){
    this.navCtrl.pop()
  }
}
