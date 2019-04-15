import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RulepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rulepage',
  templateUrl: 'rulepage.html',
})
export class RulepagePage {

  rule:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rule=this.navParams.get("rule");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RulepagePage');
  }

}
