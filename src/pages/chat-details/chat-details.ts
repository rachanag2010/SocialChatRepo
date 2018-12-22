import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chat-details',
  templateUrl: 'chat-details.html',
})


export class ChatDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad PrivacyPage');
  }
}
