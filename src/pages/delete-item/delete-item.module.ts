import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteItemPage } from './delete-item';

@NgModule({
  declarations: [
    DeleteItemPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteItemPage),
  ],
})
export class DeleteItemPageModule {}
