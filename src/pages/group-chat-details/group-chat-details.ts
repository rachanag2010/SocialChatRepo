import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GroupDetailsPage } from '../group-details/group-details';


@IonicPage()
@Component({
  selector: 'page-group-chat-details',
  templateUrl: 'group-chat-details.html',
})


export class GroupChatDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }
  openGroupDetails()
  {
    this.navCtrl.push(GroupDetailsPage);
  }
  
  ionViewDidLoad() {
      console.log('ionViewDidLoad GroupChatDetailsPage');
  }
}
