import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { InsuranceProductsProvider } from '../../providers/insurance-products/insurance-products';

/**
 * Generated class for the DeleteItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-item',
  templateUrl: 'delete-item.html',
})
export class DeleteItemPage {

  selected:boolean = false;
  insuranceItem: FormGroup;	
  id:string;
  selectedItem:any;
  itemName: string;
  itemAmount: number;
  itemDuration: number;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formBuilder: FormBuilder,
  			  public insProdProv: InsuranceProductsProvider) {
  	this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteItemPage');
  }

  initForm() {
  	this.insuranceItem = this.formBuilder.group({
      name: [this.itemName],
      amount: [this.itemAmount],
      duration: [this.itemDuration],
      itemId: ['']
    });
  }

  itemSelect() {
  	this.selected = true;
  	console.log("***Inside formSelect()***");
    this.id = this.insuranceItem.controls['itemId'].value;
    console.log('@@@Selected Product --> ',this.id);
    if(this.id==='P1'){
    	this.insProdProv.getItem(1)
    	.then(data=>{
    		this.selectedItem = data;
    		console.log('@@Data for P1@@',data);
    	})
    }else if(this.id==='P2'){
    	this.insProdProv.getItem(2)
    	.then(data=>{
    		this.selectedItem = data;
    	})
    }
  }

}
