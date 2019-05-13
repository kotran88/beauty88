import { Component } from '@angular/core';
import { IonicPage, ViewController,NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',
})
export class AddproductPage {
  value:any;
  price:any;
  time:any;
  event:any;


  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductPage');
  }
  confirm(){
    console.log(this.value);
    this.viewCtrl.dismiss({"value":this.value,"time":this.time,"price":this.price,"event":this.event});
      
  }

}
