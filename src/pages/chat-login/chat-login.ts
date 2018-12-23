import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, Loading, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
// import { UserProvider } from '../../providers/user/user';

import { TabsPage } from '../tabs/tabs';
import { User } from '../../app/user';
import { SignUpPage } from '../signup/signup';
import { unwrapResolvedMetadata } from '@angular/compiler';



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
    // public authProvider: AuthServiceProvider,
    // public toastCtrl: ToastController,
    // private formBuilder: FormBuilder,
    // private storage: Storage,
    // private userProvider: UserProvider, 
    public loadingCtrl: LoadingController) {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required] 
    // });
  
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }



  login() {
    console.log(this.uname.value,this.password.value)
    if(this.uname.value == "admin" && this.password.value =="admin")
    {
      this.navCtrl.setRoot(TabsPage);
    }
    else {
      let alert = this.alertCtrl.create(
        {
          title: 'Username or Password is incorrect',
          subTitle: ' Please try again',
          buttons: ['OK']
        });
        alert.present();
    }

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


}
