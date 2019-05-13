import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { Store } from '../../models/store';

import firebase from 'firebase';
import { CalendarWeekPage } from '../calendar-week/calendar-week';
/**
 * Generated class for the StoremanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-storemanagement',
  templateUrl: 'storemanagement.html',
})
export class StoremanagementPage {
  thisisday:any;
  month:any;
  thisdayarray=[];
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  arraydisabledTime=[];
  matchedreservearray=[];
  newarrayy=[];
  reservearray=[];
  firedata = firebase.database().ref('store');
  store={} as Store;
  storee:any;
  disabledTime:any;
  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.storee=this.navParams.get("store");
    console.log(this.storee);
    this.firedata.child(this.storee).child("reservationList").once('value',(snapshot)=>{
    
      var value:any;
      
       
      for(var result in snapshot.val()){
        console.log(result);
        console.log(snapshot.val()[result])
        this.reservearray.push(snapshot.val()[result])
      }
      var thisday = new Date();
    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
    var date = thisday.getDate();
    var month = thisday.getMonth();
    this.month=month+1;
    console.log(this.reservearray);
    console.log(date);
    for(var i=0; i<this.reservearray.length; i++){
      console.log(this.reservearray[i])
      if(date==this.reservearray[i].day){
        this.thisdayarray.push(this.reservearray[i])
      }
    }
    console.log(this.thisdayarray);

    });
    



  }
  gotoback(){
    // this.matchedKeyword="t";
    this.viewCtrl.dismiss();
  }
  selectDate(v){
    console.log(this.month);
  this.thisdayarray=[];
    for(var i=0; i<this.reservearray.length; i++){
      console.log(this.reservearray[i])
      if(v==this.reservearray[i].day&&this.month==this.reservearray[i].month){
        this.thisdayarray.push(this.reservearray[i])
      }
    }
    console.log("final : ");
    console.log(this.thisdayarray);
    // this.navCtrl.push(CalendarWeekPage,{"array":thisdayarray})
  }
  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }
  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }
  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }
  
    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }
  
    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i+1);
    }
  
    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }
  ionViewWillEnter() {

    console.log("ionViewWillEnter")
   
    var today = new Date();
    today.setHours(today.getHours()+9);
    
    var d = new Date();
    var days = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
    var day =  days[d.getDay()];

  
    var thisday = new Date();
    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
    var month = thisday.getMonth();
    var date = thisday.getDate();
    var hour = thisday.getHours();
    var minute = thisday.getMinutes();
    var fullyear = thisday.getFullYear();
    console.log("this is the day")
    // new Date().toString("hh:mm tt")
    console.log(thisday)

    console.log(today)
    console.log(month+1);
    console.log(date);
    
    console.log("final : ");
    console.log((hour)+"시");
    console.log(minute);
    console.log(fullyear)


     this.thisisday = fullyear+"년"+(month+1)+"월"+date+"일"+(hour)+"시"+minute+"분";

    console.log(this.thisisday);
    var user = firebase.auth().currentUser;


    console.log("userinfo:"+user);

    
    // this.storage.set("loginFlag",true);
    console.log(user);
    
   
   

    this.date = new Date();
    console.log(this.date);
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    // this.loadEventThisMonth();
   


  }

  disabledd(v,value){
    console.log(v);
    console.log(value);
    if(value=="toable"){

    }else if(value=="todisable"){

    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StoremanagementPage');
  }

}
