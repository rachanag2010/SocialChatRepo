import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatDetailsPage } from './chat-details';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    ChatDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatDetailsPage), RoundProgressModule,
  ],
  providers: [{
    provide: RoundProgressModule,
    useValue: {
      color: '#1e90ff',
      background: '#00bfff'
    }
  }]

  
})
export class ChatDetailsPageModule {}
