import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OpeningmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-openingmodal',
  templateUrl: 'openingmodal.html',
})
export class OpeningmodalPage {

  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpeningmodalPage');
  }
  confirm(){
    this.viewCtrl.dismiss();
  }

}
