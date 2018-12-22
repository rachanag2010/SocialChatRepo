import { Component } from '@angular/core';
import {  NavController, Loading } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../app/user';
import { SignUpPage } from '../signup/signup';



@Component({
  selector: 'page-chat-login',
  templateUrl: 'chat-login.html'
})
export class ChatLoginPage {
  user: User


  login() {
    this.presentLoadingDefault(); // present loader
    this.redirectToPages(this.user);

  }

  presentLoadingDefault() {
    this.loading.present();
  }
  redirectToPages(user: User){
    this.navCtrl.setRoot(TabsPage);

  }

  signup(){
    this.navCtrl.setRoot(SignUpPage);
  }

  loading: Loading;
  constructor(public navCtrl: NavController) {}

}
