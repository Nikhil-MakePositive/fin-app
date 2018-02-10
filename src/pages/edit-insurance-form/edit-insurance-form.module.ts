import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditInsuranceFormPage } from './edit-insurance-form';

@NgModule({
  declarations: [
    EditInsuranceFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EditInsuranceFormPage),
  ],
})
export class EditInsuranceFormPageModule {}
