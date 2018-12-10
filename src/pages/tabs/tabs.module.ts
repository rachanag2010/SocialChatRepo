import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { RecentPage } from '../recent/recent';
import { GroupPage } from '../group/group';

@NgModule({
    declarations: [
        TabsPage,
        RecentPage,
        GroupPage
    ],
    imports: [
      IonicPageModule.forChild(TabsPage),
    ],
    entryComponents: [
        TabsPage,
    ]
  })
  export class TabsModule {}