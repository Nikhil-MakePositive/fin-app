import { Component } from '@angular/core';
import { NavController, Platform, AlertController  } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public platform: Platform,
    public _DIAGNOSTIC: Diagnostic) {

  	this.initForm();

  }

    public userInfo: FormGroup;
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
    this.userInfo = this.formBuilder.group({
      id: ['USER1'],
      name: [''],
      phone: [''],
      email: ['', Validators.required],
      address: [''],
      postcode: [''],
      isAnonymous: ['true'],
      geolocation: ['false']
    });
    // this.ground = this.report.controls['groundId'].value;
    // console.log('**Ground Id-->',this.ground);
  }

  ionViewDidLoad(){
    console.log('**Inside ionViewDidLoad()**');
      // this.appUserInfo();
  }

  ionViewDidEnter(){
    console.log('**Inside ionViewDidEnter()**');
    this.isLocationAvailable();
  }

  isLocationAvailable(){
    this._DIAGNOSTIC.isLocationAvailable()
    .then((val: boolean) => 
    {
      console.log('**Location available?**');
      console.log(val);
      console.log(this.userInfo.controls['geolocation'].value);
      let geoLocationval = this.userInfo.controls['geolocation'];
          //isAvailable = val;
      if( val == true && geoLocationval.value == 'false'){
        geoLocationval.setValue(true);
        this.isLocationEnabled = true;
        console.log('**Setting isLocationEnabled TRUE**');
      }
    })
    .catch((err) => {
      console.log('**Location is ');
      console.log(err);
    }); 
  }

 //  saveInfo(){
 //    if(!this.isCreated){
 //    let id = this.userInfo.controls['id'].value,
 //        title = 'USER INFO',
 //        body = { userDetails: [this.userInfo.value]};
 //        console.log('**Body value-->**');
 //        console.log(JSON.stringify(body));
 //    this.DBU.userInfo(id,title, body)
 //    .then(()=>{
 //      this.isCreated = true;
 //      let alert = this.alertCtrl.create({
 //      title: 'Info saved',
 //      message: '',
 //      buttons: [
 //          {
 //            text: 'Ok'
 //          }
 //      ]
 //      });
 //      alert.present();
 //    });
 //  }else{
 //    let id = this.userInfo.controls['id'].value,
 //        title = 'USER INFO',
 //        body = { userDetails: [this.userInfo.value]};
 //        console.log('**Body value-->**');
 //        console.log(JSON.stringify(body));
 //    this.DBU.updateUserInfo(id, title, body)
 //    .then(()=>{
 //      let alert = this.alertCtrl.create({
 //      title: 'Info updated',
 //      message: '',
 //      buttons: [
 //          {
 //            text: 'Ok'
 //          }
 //      ]
 //      });
 //      alert.present();
 //    });
 //  }
 // }

  // appUserInfo(){
  //   this.DBU.retrieveUserInfo('USER1').then((data)=>{
  //     console.log('**User Info**');
  //     console.log(JSON.stringify(data));
  //     this.isCreated = true;
  //     this.username = data['Body']['userDetails'][0]['name'];
  //     this.useraddress = data['Body']['userDetails'][0]['address'];
  //     this.userpostcode = data['Body']['userDetails'][0]['postcode'];
  //     this.useremail = data['Body']['userDetails'][0]['email'];
  //     this.userphone = data['Body']['userDetails'][0]['phone'];
  //     this.userisAnonymous = data['Body']['userDetails'][0]['isAnonymous'];
  //     this.usergeolocation = data['Body']['userDetails'][0]['geolocation'];
  //     this.userInfo.controls['name'].setValue(this.username);
  //     this.userInfo.controls['address'].setValue(this.useraddress);
  //     this.userInfo.controls['postcode'].setValue(this.userpostcode);
  //     this.userInfo.controls['email'].setValue(this.useremail);
  //     this.userInfo.controls['phone'].setValue(this.userphone);
  //     this.userInfo.controls['isAnonymous'].setValue(this.userisAnonymous);
  //     //this.userInfo.controls['geolocation'].setValue(this.usergeolocation);
  //     this.isLocationAvailable();
  //     console.log(this.username);
  //     console.log(this.userphone);
  //     console.log(this.userisAnonymous);
  //     console.log(this.usergeolocation);
  //     //this.initForm();
  //   }).catch((err)=>{
  //     console.log(JSON.stringify(err));
  //     console.log('Error fetching user info');
  //     // this.initForm();
  //   });
  // }

  accessGeo(){  
    console.log('**Inside accessGeo()**');
    let geoLocationval = this.userInfo.controls['geolocation'],
        locationEnabled = this.isLocationEnabled;
        console.log(geoLocationval.value);
        console.log(locationEnabled);
    if( geoLocationval.value == true && locationEnabled == false){
      this._DIAGNOSTIC.requestLocationAuthorization()
      .then((locAuth) => 
      {
        geoLocationval.setValue(true);
        this.isLocationEnabled = true;
        console.log('**Authorised location**');
        console.log(this.isLocationEnabled);
        console.log(locAuth);
      })
      .catch((err) =>
      {
        console.log('**Still not authorised**');
        console.log(err);
      });
    }
  }

}
