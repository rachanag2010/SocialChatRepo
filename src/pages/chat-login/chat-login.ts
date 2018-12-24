import { Component, ViewChild, Testability } from '@angular/core';
import {  NavController, NavParams, Loading, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup  } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../app/user';
import { SignUpPage } from '../signup/signup';
// import { unwrapResolvedMetadata } from '@angular/compiler';



@Component({
  selector: 'page-chat-login',
  templateUrl: 'chat-login.html'
})
export class ChatLoginPage {
  user: User
  loginForm: FormGroup;
  loading: Loading;
  

  title = 'Login';
@ViewChild('username') uname;
@ViewChild('password') password;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public DbProvider: DatabaseProvider,
    public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }

  login() {
    this.test();
    }

  presentLoadingDefault() {
    this.loading.present();
  }
  redirectToPages(user: User){
    this.navCtrl.setRoot(TabsPage);

  }

  signup(){
    this.navCtrl.push(SignUpPage);
  }

  test(){
       this.DbProvider.login(this.uname.value , this.password.value).then((user:any) => {
      if( user )
      {
        this.navCtrl.setRoot(TabsPage);
      }
      else
      {
        let alert = this.alertCtrl.create(
              {
                title: 'Username or Password is incorrect',
                subTitle: ' Please try again',
                buttons: ['OK']
              });
              alert.present();
            }
    })
  }


}
