import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Tabs } from 'ionic-angular';
import { InvestmentsPage } from '../investments/investments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, private app: App) {

  }

  investmentsPage(){
  	this.navCtrl.push(InvestmentsPage);
  	const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
	tabsNav.select(1);
	this.navCtrl.pop();
  }
}
