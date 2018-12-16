import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileDetailsPage } from '../profile-details/profile-details';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['key', 'bluetooth', 'notifications', 'help-circle-outline'];
    this.items = [];
    this.items.push({
      title: 'Account',
      note: 'This is account',
      icon: 'key'
    });
    this.items.push({
      title: 'Update email',
      note: 'This is iemail',
      icon: 'bluetooth'
    });
    this.items.push({
      title: 'Notificatons',
      note: 'This is Notificatons',
      icon: 'notifications'
    });
    this.items.push({
      title: 'Help',
      note: 'This is help',
      icon: 'help-circle'
    });
    
  }
  itemTapped(event, item) {
    this.navCtrl.push(ProfileDetailsPage, {
      item: item
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
