import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmiCalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emi-cal',
  templateUrl: 'emi-cal.html',
})
export class EmiCalPage {

  amount:number;
  interest:number;
  duration:number;
  finalAmnt:string = "Final Amount";	
  calClicked:boolean = false;
  clickedId:number = 0;
  selected:number = 1;

  // Doughnut
	public doughnutChartLabels:string[] = ['Amount', 'Interest', 'Duration'];
	public doughnutChartData:number[] = [+this.amount, +this.interest, +this.duration];
	public doughnutChartType:string = 'doughnut';

	// events
	public chartClicked(e:any):void {
	  console.log(e);
	}

	public chartHovered(e:any):void {
	  console.log(e);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selected = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmiCalPage');
  }

  ionViewDidEnter(){
  	this.clickedId = 0;
  }

  calculate(){
  	 let rate = this.interest;
  	 rate /= 1200;
	 const a = (this.amount*rate);
	 const b = Math.pow((1+rate),this.duration);
	 const c = ((Math.pow((1+rate), this.duration))-1)*1;
	 const emi = (a*b)/c;
  	this.finalAmnt = 'Rs '+ emi + ' /-';
  	console.log("Got the amount!!-->"+this.finalAmnt);
  	this.calClicked = true;
  	console.log('calClicked--> '+ this.calClicked);
  	this.doughnutChartData = [+this.amount, +emi, +this.duration];
  }

  setRotate(id:number, sel:number){
  	this.clickedId = id;
  	this.selected = sel;
  }
}
