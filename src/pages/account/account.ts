import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileDetailsPage } from '../profile-details/profile-details';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})


export class AccountPage {
 
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['key', 'bluetooth', 'notifications', 'help-circle-outline'];
    this.items = [];
    this.items.push({
      title: 'Privacy',
      note: 'This is account',
      icon: 'key'
    });
    this.items.push({
      title: 'Change Number',
      note: 'This is iemail',
      icon: 'bluetooth'
    });
    this.items.push({
      title: 'Delete my account',
      note: 'This is Notificatons',
      icon: 'notifications'
    });

  }
  itemTapped(event, item) {
    this.navCtrl.push(ProfileDetailsPage, {
      item: item
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
