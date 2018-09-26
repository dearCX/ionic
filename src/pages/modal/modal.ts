import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TabsPage } from './../tabs/tabs'

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  goRoot(){
    console.log('aaaaa')
    // this.navCtrl.popToRoot() //跳转回根页面
    this.navCtrl.setRoot(TabsPage);
  }
  close(){
    this.viewCtrl.dismiss()
  }
}
