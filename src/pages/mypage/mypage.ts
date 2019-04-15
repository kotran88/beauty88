import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { StoredetailPage } from '../storedetail/storedetail';
/**
 * Generated class for the MypagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {
  storearray=[];
  userId:any;
  viewCtrl:any;
  firedata = firebase.database();
  constructor(viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {

    this.viewCtrl=viewCtrl;

    this.userId=navParams.get("userid");
    console.log("user id issss : "+this.userId);
    this.firedata.ref("clients").child(this.userId).child("reservationList").once('value',(snapshot)=>{
      this.storearray=[];
      for(var result in snapshot.val()){
        console.log(result);
        this.storearray.push(snapshot.val()[result]);
        // for(var finalresult in snapshot.val()[result]){
        //   console.log(finalresult);
        //   console.log(snapshot.val()[result][finalresult])
        //  
        // }
      }

    var sortingField = "day";

    console.log(this.storearray);
    this.storearray.sort(function(b,a) { // 오름차순
      console.log(a[sortingField] - b[sortingField]);
      return a[sortingField] - b[sortingField];
      // 13, 21, 25, 44
  });

  var sortingField = "month";

    console.log(this.storearray);
    this.storearray.sort(function(b,a) { // 오름차순
      console.log(a[sortingField] - b[sortingField]);
      return a[sortingField] - b[sortingField];
      // 13, 21, 25, 44
  });
      console.log(this.storearray);
    });
  }
  detail(store){
    this.navCtrl.push(StoredetailPage,{"storeId":store.id,"userId":this.userId,"store":store}).then(()=>{
      this.navCtrl.getActive().onDidDismiss(data => {
       
        console.log("dismiss");
      });
    })
  }
  gotoback(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypagePage');
  }

}
