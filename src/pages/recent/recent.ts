import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatDetailsPage } from '../chat-details/chat-details';


@IonicPage()
@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html',
})
export class RecentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentPage');
  }


  openChatDetailsPage() {
    this.navCtrl.push(ChatDetailsPage);
  }
  


}
