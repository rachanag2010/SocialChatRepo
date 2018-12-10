import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentPage } from './recent';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    RecentPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentPage), RoundProgressModule,
  ],
  providers: [{
    provide: RoundProgressModule,
    useValue: {
      color: '#1e90ff',
      background: '#00bfff'
    }
  }]

  
})
export class RecentPageModule {}
