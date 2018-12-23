import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrialEditDataPage } from './trial-edit-data';



@NgModule({
    declarations: [
        TrialEditDataPage,
    ],
    imports: [
      IonicPageModule.forChild(TrialEditDataPage),
    ],
  })
  export class TrialAddDataPageModule {}
  