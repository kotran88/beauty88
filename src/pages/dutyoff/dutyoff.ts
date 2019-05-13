import { Component } from '@angular/core';
import { IonicPage,ViewController,AlertController, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
/**
 * Generated class for the DutyoffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dutyoff',
  templateUrl: 'dutyoff.html',
})
export class DutyoffPage {

  dutylist=[];
  alert:any;
  name:any;
  store:any;
  viewCtrl:any;
  alertCtrl:any;
  firedata = firebase.database().ref('store');
  constructor(alertCtrl:AlertController,viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.viewCtrl=viewCtrl;
    this.alertCtrl=alertCtrl;
    var thislist=[];
    this.dutylist=this.navParams.get("array");
    this.name=this.navParams.get("name");

    this.store=this.navParams.get("store");

    console.log(this.dutylist);
   
  }
  generateagain(){
   
    this.firedata.child(this.store).child("designermanagement").child(this.name).once("value",(snap)=>{
    
     
      if(snap.val()!=null){
        this.dutylist=[];
            for(var a in snap.val()){
              console.log(snap.val()[a]);
                this.dutylist.push(snap.val()[a].date);
            }
            console.log(this.dutylist);
            console.log(this.dutylist.length);
         
      }else{
        window.alert("등록된 휴무가없습니다")
    }
    console.log(this.dutylist);
    });
  }
  clickedone(v){
console.log(v);
this.alert = this.alertCtrl.create({
        title: '정말로 삭제하시겠습니까?',
        buttons: [
          {
            text: '확인',
            handler: data => {
              this.dutylist=[];
              this.firedata.child(this.store).child("designermanagement").child(this.name).once("value",(snap)=>{
                if(snap.val()!=null){
                  for(var a in snap.val()){
                    console.log(snap.val()[a].date);
                  
                        if(snap.val()[a].date==v){
                          console.log(v+"가 일치"+"/////")
                          var key=snap.val()[a].key;
                          console.log(key);
                          // value=String(i);
                          this.firedata.child(this.store).child("designermanagement").child(this.name).child(key).remove();
                     
                            this.generateagain();
                        }
                        // this.dutylist.push(snap.val().date[i]);
                    
                  }
                      
                      console.log(this.dutylist);
                      console.log(this.dutylist.length);
                   
                }

                // if(snap.val()!=null){
                //   for(var a in snap.val()){
                //     console.log(a);
                //     console.log(snap.val()[a])
                //     console.log(snap.val()[a].length)
                //     console.log(snap.val()[a].length)
                //     for(var i=0; i<snap.val()[a].length; i++){
                //       console.log(snap.val()[a][i]);
                //       if(snap.val()[a][i]==v){
                //         console.log(v+"가 일치"+"/////"+i)
                //         var value="";
                //         value=String(i);
                //         console.log("value is :"+value);
                //         this.firedata.child(this.store).child("designermanagement").child(this.name).child("date").child(value).remove();
                       
                //         alert.dismiss(); 
                //         this.generateagain();
                       
                //       }
                //     }
                //     console.log(snap.val()[a].date)
                //   }
                //   if(snap.val().date!=undefined){
                //     // this.dutylist.push(snap.val().date);
                //   }
                // }
              });

            }
          },
          {
            text: '취소',
            handler: data => {
              
            }
          }
        ]
      });
      this.alert.present();
  }

  takePhoto(){
    console.log("Take photo!!!!");
  }
  getPhoto(){
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraselectPage');
  }
  confirm(){
    this.viewCtrl.dismiss();
  }
}
