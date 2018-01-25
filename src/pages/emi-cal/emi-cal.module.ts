import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmiCalPage } from './emi-cal';

@NgModule({
  declarations: [
    EmiCalPage,
  ],
  imports: [
    IonicPageModule.forChild(EmiCalPage),
  ],
})
export class EmiCalPageModule {}
