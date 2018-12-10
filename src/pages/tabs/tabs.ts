import { Component } from '@angular/core';

import {RecentPage} from '../recent/recent';
import { GroupPage } from '../group/group';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecentPage;
  tab2Root = GroupPage;
  
  constructor() {

  }
}

export class BasicPage {
  rootPage = TabsPage;
}
