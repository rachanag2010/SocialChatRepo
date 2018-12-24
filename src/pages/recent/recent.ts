import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { ChatDetailsPage } from '../chat-details/chat-details';
import { DatabaseProvider } from '../../providers/database/database';


@IonicPage()
@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html',
})
export class RecentPage {
  items;

  constructor(public navCtrl: NavController, 
    public DbProvider: DatabaseProvider,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    ) {
    this.initializeItems();
  }
// test()
// {
//   this.DbProvider.getAllUsers().then((arrayItems:any) => {
//     this.items = arrayItems;
//   })
 
  // .then((name:any) => {
  //   if( name )
  //   {
  //     console.log(name)  
  //   }
  //   else
  //   {
  //     let alert = this.alertCtrl.create(
  //           {
  //             title: 'Username or Password is incorrect',
  //             subTitle: ' Please try again',
  //             buttons: ['OK']
  //           });
  //           alert.present();
  //         }
  // })


// }


  initializeItems() {
    this.DbProvider.getAllUsers().then((arrayItems:any) => {
      this.items = arrayItems;
    })}


  // initializeItems() {
  //     this.items = [
  //     'Amsterdam',
  //     'Bogota',
  //     'Buenos Aires',
  //     'Cairo',
  //     'Dhaka',
  //     'Edinburgh',
  //     'Geneva',
  //     'Genoa',
  //     'Glasglow',
  //     'Hanoi',
  //     'Hong Kong',
  //     'Islamabad',
  //     'Istanbul',
  //     'Jakarta',
  //     'Kiel',
  //     'Kyoto',
  //     'Le Havre',
  //     'Lebanon',
  //     'Lhasa',
  //     'Lima',
  //     'London',
  //     'Los Angeles',
  //     'Madrid',
  //     'Manila',
  //     'New York',
  //     'Olympia',
  //     'Oslo',
  //     'Panama City',
  //     'Peking',
  //     'Philadelphia',
  //     'San Francisco',
  //     'Seoul',
  //     'Taipeh',
  //     'Tel Aviv',
  //     'Tokio',
  //     'Uelzen',
  //     'Washington'
  //   ];
  // }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  onCancel(ev){
    this.initializeItems();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentPage');
  }


  openChatDetailsPage() {
    this.navCtrl.push(ChatDetailsPage);
  }
  
}



