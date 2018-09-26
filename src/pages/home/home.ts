import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from './../detail/detail'
import { IndexProvider } from './../../providers/index/index';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  //定义一个属性
  detailPage
  constructor(public navCtrl: NavController, public indexProvider: IndexProvider) {
    this.detailPage = DetailPage
  }
  ionViewDidEnter() {
    console.log(this.indexProvider);
  }
  goDetail(){
    this.navCtrl.push(DetailPage, {
      title:'home页面跳转过来的'
    })
  }
}