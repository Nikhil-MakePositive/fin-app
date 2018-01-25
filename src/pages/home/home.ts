import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvestmentsPage } from '../investments/investments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  investmentsPage(){
  	this.navCtrl.push(InvestmentsPage);
  }
}
