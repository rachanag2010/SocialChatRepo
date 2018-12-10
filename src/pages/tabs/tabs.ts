import { Component } from '@angular/core';

import {RecentPage} from '../recent/recent';
import { GroupPage } from '../group/group';
import { FindFriendsPage } from '../find-friends/find-friends';
import { ProfilePage } from '../profile/profile'



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecentPage;
  tab2Root = GroupPage;
  tab3Root = FindFriendsPage;
  tab4Root = ProfilePage;
  
  constructor() {

  }
}

export class BasicPage {
  rootPage = TabsPage;
}
