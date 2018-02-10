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
  duration:number; // In months
  emiAmnt:number = 0;	
  calClicked:boolean = false;
  clickedId:number = 0;
  selected:number = 1;
  doCalculate:boolean;
  breakup: any = [];

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
  	 let rate = this.interest,
  	 	 balance = this.amount,
  	 	 time = this.duration,
  	 	 mnthlyInterest,
  	 	 principle;
  	 this.breakup = [];	 
  	 if(this.selected == 2)time = Math.round(time*12);	 
  	 rate /= 1200; // To calculate monthly Interest rate
	 const a = (this.amount*rate);
	 const b = Math.pow((1+rate),time);
	 const c = ((Math.pow((1+rate), time))-1)*1;
	 const emi = (a*b)/c;
	 do{
		 mnthlyInterest = rate * balance;
		 // console.log('@MIntrst@'+mnthlyInterest);
		 principle = emi - mnthlyInterest;
		 // console.log('@Princle@'+principle);
		 balance = balance - principle;
		 console.log('@balance@'+balance);
		 if(balance<-1){ // have to check for -1 as number pipe truncates number between 0 and -1 to 0
		 	balance=0;
		 	console.log('@@Exitting@@');
		    break;
		 }
		 this.breakup.push({mInterest:mnthlyInterest,p:principle,bal:balance});
	 }while(balance>0)
	this.doCalculate = true; 
	// console.log('@Breakup@'+JSON.stringify(this.breakup));
  	this.emiAmnt = emi ; // Final constant emi amount
  	console.log("Got the amount!!-->"+this.emiAmnt);
  	this.calClicked = true;
  	console.log('calClicked--> '+ this.calClicked);
  	// this.resetValues();
  	this.doughnutChartData = [+this.amount, +emi, +this.duration];
  }

  setRotate(id:number, sel:number){
  	this.clickedId = id;
  	this.selected = sel;
  }

  resetValues(){
  	this.amount = 0;
  	this.interest = 0;
  	this.duration = 0;
  }
}
