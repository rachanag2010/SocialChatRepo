import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupChatDetailsPage } from './group-chat-details';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    GroupChatDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupChatDetailsPage), RoundProgressModule,
  ],
  providers: [{
    provide: RoundProgressModule,
    useValue: {
      color: '#1e90ff',
      background: '#00bfff'
    }
  }]

  
})
export class GroupChatDetailsPageModule {}
