import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { ChatLoginPage } from '../pages/chat-login/chat-login';
import { SignUpPage } from '../pages/signup/signup';

import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { RecentPage } from '../pages/recent/recent';
import { GroupPage } from '../pages/group/group';
import { FindFriendsPage } from '../pages/find-friends/find-friends';
import { ProfilePage } from '../pages/profile/profile';
import { NewGroupPage } from '../pages/new-group/new-group';
import { GroupDetailsPage } from '../pages/group-details/group-details';
import { SingleChatDetailPage } from '../pages/single-chat-detail/single-chat-detail';
import { ProfileDetailsPage } from '../pages/profile-details/profile-details';
import { AccountPage } from '../pages/account/account';
import { PrivacyPage } from '../pages/privacy/privacy';
import { ChatDetailsPage } from '../pages/chat-details/chat-details';
import { GroupChatDetailsPage } from '../pages/group-chat-details/group-chat-details';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = ChatLoginPage;
    //  rootPage = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: ChatLoginPage },
      { title: 'Sign Up', component: SignUpPage },
      { title: 'My First List', component: ListPage },
      { title: ' tabs page', component: TabsPage},
      { title: ' Item Details page', component: ItemDetailsPage},
      { title: ' Recent page', component: RecentPage},
      { title: ' Group page', component: GroupPage},
      { title: ' Find Friends page', component: FindFriendsPage},
      { title: 'new group page', component: NewGroupPage},
      { title: 'group info page', component: GroupDetailsPage},
      { title: 'single chat detail', component: SingleChatDetailPage},
      { title: 'profile', component: ProfilePage},
      { title: 'profile detail', component: ProfileDetailsPage},
      { title: 'account', component: AccountPage},
      { title: 'privacy', component: PrivacyPage},
      { title: 'Chat details', component: ChatDetailsPage},
      { title: 'Group Chat details', component: GroupChatDetailsPage},
      { title: 'Update Profile', component: UpdateProfilePage},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
