import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatLoginPage } from '../pages/chat-login/chat-login';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ChatLoginPage,
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
    GroupChatDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatLoginPage,
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
    GroupChatDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
