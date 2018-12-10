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
    TabsPage
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
