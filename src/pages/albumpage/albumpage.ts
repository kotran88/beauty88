import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlbumpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-albumpage',
  templateUrl: 'albumpage.html',
})
export class AlbumpagePage {

  titlee:any;
  array=[];
  firstImage:any;
  secondImage:any;
  thirdImage:any;
  fourthImage:any;

  fifthImage:any;
  sixthImage:any;
  seventhImage:any;
  eighthImage:any;
  ninethImage:any;
  tenthImage:any;
  eleventhImage:any;
  twelvethImage:any;

  selected:any;
  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.array=this.navParams.get("albumList");
    this.selected=this.navParams.get("selected");
    console.log(this.array);
    console.log(this.array.length);
   
    console.log(this.selected);

  }

  gotoalbum(value){
console.log(value);
this.selected=this.array[value];


  }
  gotoback(){
    this.titlee="";
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    setTimeout(()=>{
      this.titlee="애프터뷰 앨범"
    },500)
    console.log('ionViewDidLoad AlbumpagePage');
  }

}
