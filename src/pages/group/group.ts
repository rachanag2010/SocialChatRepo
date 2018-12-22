import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupChatDetailsPage } from '../group-chat-details/group-chat-details';


@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }
  openGroupChatDetailsPage()
  {
    this.navCtrl.push(GroupChatDetailsPage);

  }
}
