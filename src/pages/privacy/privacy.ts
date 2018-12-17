import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-privacy',
    templateUrl: 'privacy.html',
})
export class PrivacyPage {
    testRadioOpen: boolean;
    testRadioResult;
    constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PrivacyPage');
    }


    doRadio() {
        let alert = this.alerCtrl.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Everyone',
            value: 'everyone',
            checked: true
        });

        alert.addInput({
            type: 'radio',
            label: 'My Contacts',
            value: 'contacts'
        });
        alert.addInput({
            type: 'radio',
            label: 'Nobody',
            value: 'nobody'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: data => {
                console.log('Radio data:', data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });

        alert.present().then(() => {
            this.testRadioOpen = true;
        });
    }


}

