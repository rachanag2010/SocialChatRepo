import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-trial-add-data',
  templateUrl: 'trial-add-data.html',
})
export class TrialAddDataPage {

  data = { date:"", type:"", description:"", amount:0 };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast,
    public platform: Platform ) {}



  saveData() {



    if (this.platform.is('cordova')) {

    }
    else{


    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)',[this.data.date,this.data.type,this.data.description,this.data.amount])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
}
}