import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrialAddDataPage } from './trial-add-data';



@NgModule({
    declarations: [
        TrialAddDataPage,
    ],
    imports: [
      IonicPageModule.forChild(TrialAddDataPage),
    ],
  })
  export class TrialAddDataPageModule {}
  