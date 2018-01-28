import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InsuranceProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InsuranceProductsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InsuranceProductsProvider Provider');
  }


  public product1:any = {
  				name: 'P1', policyAmount: 10000000, duration: 20,
	  			val:[{ amount: '3150', date: '10/01/2018', status: 'Completed'},
	  			  { amount: '3150', date: '10/02/2018', status: 'Completed'},
	  			  { amount: '3150', date: '10/03/2018', status: 'Not Complete'},
	  			  { amount: '3150', date: '10/04/2018', status: 'Not Complete'}]
  			    };
  public product2:any = {
  				name: 'P1', policyAmount: 50000000, duration: 2,
  				val: [{ amount: '12580', date: '10/01/2018', status: 'Completed'},
	  			  { amount: '12580', date: '10/02/2018', status: 'Completed'},
	  			  { amount: '12580', date: '10/03/2018', status: 'Not Complete'},
	  			  { amount: '12580', date: '10/04/2018', status: 'Not Complete'}]
	  			};

 getItem(id:number){
 	let p1 = this.product1,
 	    p2 = this.product2;

 	return new Promise(resolve => {
	 	if(id === 1){
	 		resolve(p1);
	 	}else if(id === 2){
	 		resolve(p2);
	 	}
    });
 }	

 getItemVal(id:number){
 	let p1 = this.product1,
 	    p2 = this.product2;

 	return new Promise(resolve => {
	 	if(id === 1){
	 		resolve(p1.val);
	 	}else if(id === 2){
	 		resolve(p2.val);
	 	}
    });
 }  			

}
