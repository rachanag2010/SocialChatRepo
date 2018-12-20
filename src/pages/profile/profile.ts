import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfileDetailsPage } from '../profile-details/profile-details';
import { AccountPage } from '../account/account';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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


  openAccountPage() {
    this.navCtrl.push(AccountPage);
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  openHelpPage() {
    this.navCtrl.push(AccountPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
