import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsuranceFormPage } from './insurance-form';

@NgModule({
  declarations: [
    InsuranceFormPage,
  ],
  imports: [
    IonicPageModule.forChild(InsuranceFormPage),
  ],
})
export class InsuranceFormPageModule {}
