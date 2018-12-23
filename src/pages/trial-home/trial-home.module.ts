import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrialHomePage } from './trial-home';


@NgModule({
  declarations: [
    TrialHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TrialHomePage),
  ],
})
export class TrialHomePageModule {}
