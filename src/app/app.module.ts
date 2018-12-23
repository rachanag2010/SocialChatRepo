import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { IonicStorageModule } from '@ionic/storage';
import { ChatLoginPage } from '../pages/chat-login/chat-login';
import { SignUpPage } from '../pages/signup/signup';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { RecentPage } from '../pages/recent/recent';
import { GroupPage } from '../pages/group/group';
import { FindFriendsPage } from '../pages/find-friends/find-friends';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage} from '../pages/tabs/tabs';
import { NewGroupPage } from '../pages/new-group/new-group';
import { GroupDetailsPage } from '../pages/group-details/group-details';
import { SingleChatDetailPage } from '../pages/single-chat-detail/single-chat-detail';
import { ProfileDetailsPage } from '../pages/profile-details/profile-details';
import { AccountPage } from '../pages/account/account';
import { PrivacyPage } from '../pages/privacy/privacy';
import { ChatDetailsPage } from '../pages/chat-details/chat-details';
import { GroupChatDetailsPage } from '../pages/group-chat-details/group-chat-details';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';
import { TrialHomePage } from '../pages/trial-home/trial-home';
import { TrialAddDataPage } from '../pages/trial-add-data/trial-add-data';
import { TrialEditDataPage } from '../pages/trial-edit-data/trial-edit-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    ChatLoginPage,
    SignUpPage,
    ItemDetailsPage,
    ListPage,
    RecentPage,
    GroupPage,
    FindFriendsPage,
    ProfilePage,
    TabsPage,
    NewGroupPage,
    GroupDetailsPage,
    SingleChatDetailPage,
    ProfileDetailsPage,
    AccountPage,
    PrivacyPage,
    ChatDetailsPage,
    GroupChatDetailsPage,
    UpdateProfilePage,
    TrialHomePage,
    TrialAddDataPage,
    TrialEditDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatLoginPage,
    SignUpPage,
    ItemDetailsPage,
    ListPage,
    RecentPage,
    GroupPage,
    FindFriendsPage,
    ProfilePage,
    TabsPage,
    NewGroupPage,
    GroupDetailsPage,
    SingleChatDetailPage,
    ProfileDetailsPage,
    AccountPage,
    PrivacyPage,
    ChatDetailsPage,
    GroupChatDetailsPage,
    UpdateProfilePage,
    TrialHomePage,
    TrialAddDataPage,
    TrialEditDataPage
  ],
  providers: [
    SQLite,
    Toast,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
