import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { InsuranceFormPage } from '../insurance-form/insurance-form';
import { DeleteItemPage } from '../delete-item/delete-item';
/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl:'popover.html'
})
export class PopoverPage {

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  navForm(id:number){
  	if(id === 1){
  		this.navCtrl.push(InsuranceFormPage);
  	}else if(id === 3){
  		this.navCtrl.push(DeleteItemPage);
  	}
  }

}
