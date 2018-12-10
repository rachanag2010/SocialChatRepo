import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { RecentPage } from '../recent/recent';
import { GroupPage } from '../group/group';
import { FindFriendsPage } from '../find-friends/find-friends';
import { ProfilePage } from '../profile/profile';


@NgModule({
    declarations: [
        TabsPage,
        RecentPage,
        GroupPage,
        FindFriendsPage,
        ProfilePage
    ],
    imports: [
      IonicPageModule.forChild(TabsPage),
    ],
    entryComponents: [
        TabsPage,
    ]
  })
  export class TabsModule {}