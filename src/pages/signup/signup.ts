import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {
  selectedItem: any;
  @ViewChild('firstname') firstname;
  @ViewChild('lastname') lastname;
  @ViewChild('username') username;
  @ViewChild('email') email;
  @ViewChild('password1') password1;
  @ViewChild('password2') password2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
