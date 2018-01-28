import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PopoverPage } from '../popover/popover';
import { InsuranceProductsProvider } from '../../providers/insurance-products/insurance-products';

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
  selItem:any;

  // product1 = [{ title: 'P1', date: '10/01/2018', status: 'Completed'},
  // 			  { title: 'P1', date: '10/02/2018', status: 'Completed'},
  // 			  { title: 'P1', date: '10/03/2018', status: 'Not Complete'},
  // 			  { title: 'P1', date: '10/04/2018', status: 'Not Complete'}];
  // product2 = [{ title: 'P2', date: '10/01/2018', status: 'Completed'},
  // 			  { title: 'P2', date: '10/02/2018', status: 'Completed'},
  // 			  { title: 'P2', date: '10/03/2018', status: 'Not Complete'},
  // 			  { title: 'P2', date: '10/04/2018', status: 'Not Complete'}];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public menuCntrl: MenuController,
  			  public popoverCtrl: PopoverController,
  			  public insProdProv: InsuranceProductsProvider) {
  	// console.log('@@@Product1@@@ '+ this.insProdProv.getItem(1));
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

  selectProduct() {
  	if(this.product === 'P1'){
  		console.log('@@@P1 SELECTED@@@');
  		this.insProdProv.getItemVal(1)
  		.then(data=>{
  			this.selItem = data;
  		})
  	}else if(this.product === 'P2'){
  		// this.selItem = this.insProdProv.product2.val;
  		this.insProdProv.getItemVal(2)
  		.then(data=>{
  			this.selItem = data;
  		})
  	}
  }

}
