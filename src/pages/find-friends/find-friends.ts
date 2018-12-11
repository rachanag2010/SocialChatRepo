import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-friends',
  templateUrl: 'find-friends.html',
})
export class FindFriendsPage {
  friends: string = "friendsList";
  isAndroid: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    platform: Platform) {
      this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindFriendsPage');
  }

}




