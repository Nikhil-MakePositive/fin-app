import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the InsuranceFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insurance-form',
  templateUrl: 'insurance-form.html',
})
export class InsuranceFormPage {

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formBuilder: FormBuilder) {
  	this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceFormPage');
  }

  public itemInfo: FormGroup;
  username: string;
  useraddress: string;
  userpostcode: string;
  useremail: string;
  userphone: string;
  userisAnonymous: boolean;
  usergeolocation: boolean;
  isCreated: boolean = false;
  isLocationEnabled: boolean = false;


  initForm(){
    this.itemInfo = this.formBuilder.group({
      id: ['Form1'],
      name: [''],
      amount: [''],
      email: ['', Validators.required],
      duration: [''],
      nominee: [''],
    });
    // this.ground = this.report.controls['groundId'].value;
    // console.log('**Ground Id-->',this.ground);
  }

}
