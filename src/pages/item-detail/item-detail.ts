import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PopoverPage } from '../popover/popover';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  
  product:string = '';	

  rows = [{name:'Nik',Company:'ARNS',Gender:'M'}];
  columns = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public menuCntrl: MenuController,
  			  public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

  menuOpen(myEvent) {
  	console.log('@@Menu Button Clicked@@');
  	// this.menuCntrl.open();
  	let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
