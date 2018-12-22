import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Component({
selector: 'page-update-profile',
templateUrl: 'update-profile.html'
})
export class UpdateProfilePage {

constructor(public navCtrl: NavController,private sqlite: SQLite) {

}

username='';
items = [];
save()
{


this.sqlite.create({
name: 'data.db',
location: 'default'
})
.then((db: SQLiteObject) => {

    
//data insert section
db.executeSql('CREATE TABLE IF NOT EXISTS usernameList(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
.then(() => alert('Executed SQL'))
.catch(e => console.log(e));

//data insert section
db.executeSql('INSERT INTO usernameList(name) VALUES(?)', [this.username])
.then(() => alert('Executed SQL'))
.catch(e => console.log(e));


//data retrieve section

db.executeSql('select * from usernameList', []).then((data) => {

alert(JSON.stringify(data));

//alert(data.rows.length);
//alert(data.rows.item(5).name);
this.items = [];
if(data.rows.length > 0) {
for(var i = 0; i < data.rows.length; i++) {
//alert(data.rows.item(i).name);�
this.items.push({name: data.rows.item(i).name});
}
}

}, (err) => {
alert('Unable to execute sql: '+JSON.stringify(err));
});
})
.catch(e => alert(JSON.stringify(e)));
alert(this.username);

}

}




































// import { Component } from '@angular/core';
// import { NavController, ActionSheetController, LoadingController } from 'ionic-angular';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';

// import { Camera, CameraOptions } from '@ionic-native/camera';
// import * as firebase from '@ionic-native/firebase';

// @Component({
//   selector: 'page-update-profile',
//   templateUrl: 'update-profile.html'
// })
// export class UpdateProfilePage {

//   profileForm: FormGroup;

//   image: any = null;

//   constructor(public navCtrl: NavController,
//     public actionSheetCtrl: ActionSheetController,
//     public loadingCtrl: LoadingController,
//     public fb: FormBuilder,
//     public camera: Camera,
//     public afDb: AngularFireDatabase,
//     public afAuth: AngularFireAuth) {

//     this.profileForm = this.fb.group({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: ''
//     });
//   }

//   save(profile) {
//     // TODO: Save data to firebase
//     let loading = this.loadingCtrl.create();
//     loading.present();
//     this.afAuth.auth.createUserWithEmailAndPassword(profile.email, profile.password)
//       .then(userFromAuth => {
//         console.log('userFromAuth')
//         console.log(userFromAuth)
//         this.uploadPhoto(userFromAuth.uid);
//         loading.dismiss();
//       }).catch(err => console.error(err));
//   }


//   selectImage() {
//     this.actionSheetCtrl.create({
//       title: 'Set Profile Picture',
//       buttons: [
//         {
//           text: 'Take a Photo',
//           handler: () => {
//             this.selectImageInCamera();
//           }
//         },
//         {
//           text: 'Choose from Gallery',
//           handler: () => {
//             this.selectImageInGallery();
//           }
//         },
//         {
//           text: 'Cancel',
//           role: 'cancel'
//         }
//       ]
//     }).present();
//   }

//   selectImageInCamera() {
//     const CAMERA_OPTIONS: CameraOptions = {
//       allowEdit: true,
//       quality: 100,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       sourceType: this.camera.PictureSourceType.CAMERA,
//       encodingType: this.camera.EncodingType.PNG,
//       mediaType: this.camera.MediaType.PICTURE
//     }

//     this.camera.getPicture(CAMERA_OPTIONS).then((imageData) => {
//       this.image = `data:image/jpeg;base64,${imageData}`;
//     }).catch(err => console.error(err));
//   }

//   selectImageInGallery() {
//     const CAMERA_OPTIONS: CameraOptions = {
//       allowEdit: true,
//       quality: 100,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
//       encodingType: this.camera.EncodingType.PNG,
//       mediaType: this.camera.MediaType.PICTURE
//     }
//     this.camera.getPicture(CAMERA_OPTIONS).then((imageData) => {
//       this.image = `data:image/jpeg;base64,${imageData}`;
//     }).catch(err => console.error(err));
//   }

//   uploadPhoto(uid) {
//     let storageRef = firebase.storage().ref();

//     let loading = this.loadingCtrl.create();
//     loading.present();

//     storageRef.child(`/profile_pictures/${uid}.png`)
//       .putString(this.image, 'data_url')
//       .then(imageResult => {
//         this.afDb.object(`/users/${uid}/photoURL`).set(imageResult.downloadURL);
//         loading.dismiss();
//       }).catch(err => console.error(err));
//   }

// }