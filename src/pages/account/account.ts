import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfileDetailsPage } from '../profile-details/profile-details';
import { PrivacyPage } from '../privacy/privacy';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})


export class AccountPage {
 
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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

  openPrivacyPage() {
    this.navCtrl.push(PrivacyPage);
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
