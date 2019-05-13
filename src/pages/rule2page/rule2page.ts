import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Rule2pagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rule2page',
  templateUrl: 'rule2page.html',
})
export class Rule2pagePage {

  rule2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get("rule2"))
    setTimeout(()=>{
  document.getElementById("ttt").innerHTML=this.navParams.get("rule2");
    },2000)
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rule2pagePage');
  }

}
