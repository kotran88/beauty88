import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {Reservation} from './../../models/reservation';
import { JoinedPage } from '../joined/joined';
import { Store } from '../../models/store';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { CallNumber } from '@ionic-native/call-number';
import { AlbumpagePage } from '../albumpage/albumpage';

import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk';
/**
 * Generated class for the StoredetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var naver: any;
 
@Component({
  selector: 'page-storedetail',
  templateUrl: 'storedetail.html',
})
export class StoredetailPage {
  designermanagement=[];
  reviewarray=[];
  designImage:any;
  reviewmoreflag:boolean=false;
  designImage1:any;
  designImage2:any;

  designImage5:any;
  designImage6:any;
  designImage7:any;
  designImage8:any;
  designImage9:any;
  designImage10:any;
  designImage11:any;
  designImage12:any;
  designImage13:any;
  designImage14:any;
  designImage15:any;
  designImage16:any;
  designImage17:any;
  designImage18:any;
  designImage19:any;
  designImage20:any;
  designImage21:any;
  designImage22:any;
  designImage23:any;
  designImage24:any;
  designImage25:any;
  designImage26:any;
  designImage27:any;
  designImage28:any;
  designImage29:any;
  designImage30:any;
  designImage31:any;
  designImage32:any;
  designImage33:any;
  designImage34:any;
  designImage35:any;
  designImage36:any;
  designImage37:any;
  designImage38:any;
  designImage39:any;

  firstimage:boolean=true;
  secondimage:boolean=true;
  thirdimage:boolean=true;
  fourthimage:boolean=true;
  fifthimage:boolean=true;
  sixthimage:boolean=true;
  seventhimage:boolean=true;
  image8:boolean=true;
  image9:boolean=true;
  image10:boolean=true;
  image11:boolean=true;
  image12:boolean=true;
  image13:boolean=true;
  image14:boolean=true;
  image15:boolean=true;
  image16:boolean=true;
  image17:boolean=true;
  image18:boolean=true;
  image19:boolean=true;
  image20:boolean=true;


  designerImage:any;
  designerImage1:any;
  designerImage2:any;
  designerImage3:any;
  designerImage4:any;
  designerImage5:any;
  designerImage6:any;
  designerImage7:any;
  designerImage8:any;
  designerImage9:any;
  designerImage10:any;
  designerImage11:any;
  designerImage12:any;
  designerImage13:any;
  designerImage14:any;
  designerImage15:any;
  designerImage16:any;
  designerImage17:any;
  designerImage18:any;
  designerImage19:any;
  designerImage20:any;


  designername:any;
  designername1:any;
  designername2:any;
  designername3:any;
  designername4:any;
  designername5:any;
  designername6:any;
  designername7:any;
  designername8:any;
  designername9:any;
  designername10:any;
  designername11:any;
  designername12:any;
  designername13:any;
  designername14:any;
  designername15:any;
  designername16:any;
  designername17:any;
  designername18:any;
  designername19:any;

  selectedDesigner:any="none";

  arrayPrice=[];
  designImage3:any;
  selecteddesignernumber=0;
  designImage4:any;
  reservationfinal=[];
  map:any;
  lat:any;
  allreservation=[];
  disabledreservation=[];
  nick:any;
  selectDayOfWeek:any;
  month:any;
  lng:any;
  storeId:any;
  disabledTime:any;
  first:boolean=true;
  second:boolean=false;
  third:boolean=false;
  offduty=[];
  fourth:boolean=false;
  fifth:boolean=false;
  sixth:boolean=false;
  seventh:boolean=false;
  eighth:boolean=false;

  joinn:boolean=false;
  dayofweek1:any;
  dayofweek2:any;
  dayofweek3:any;
  dayofweek4:any;
  dayofweek5:any;
  dayofweek6:any;
  dayofweek7:any;
  flag=0;
  newmonth=0;
  nowtime:any;
  selectDay:any;
  dayofweek:any;
  reviewtowrite:any;
  mainImage:any;
  matchedDay=[];
  firstImage:any;
  secondImage:any;
  thirdImage:any;
  fourthImage:any;
  descriptionImage:any;
  today:any;
  name:any;
  address:any;
  tel:any;
  description:any;
  reserve={} as Reservation;
  reservation=[];
  firstdate:any;
  seconddate:any;
  thirddate:any;
  fourthdate:any;
  fifthdate:any;
  sixthdate:any;
  seventhdate:any;
  designFlag:boolean=false;
  designarray=[];
  viewCtrl:any;
  slides=[];
  facility:any;
  userId:any;
  reservationDes=[];
  endofthismonth:any;
  categoryy:any;
  firedataa = firebase.database();
  firedata = firebase.database().ref('store');
  constructor(public kakao:KakaoCordovaSDK,viewCtrl:ViewController,public callNumber:CallNumber,public viewer:PhotoViewer,public navCtrl: NavController, public navParams: NavParams) {
     this.userId=this.navParams.get("userId");
     this.storeId=this.navParams.get("storeId");
     this.nick=this.navParams.get("nick");
     this.categoryy=this.navParams.get("category");
     this.viewCtrl=viewCtrl;
     console.log("constructor")
    console.log("user id is : "+this.userId);
     console.log(this.storeId);


    
     console.log("ngOnInit")
     var thisday = new Date();
     thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
     var month = thisday.getMonth();
     var date = thisday.getDate();
     var hour = thisday.getHours();
     var minute = thisday.getMinutes();
     var fullyear = thisday.getFullYear();
     var second=thisday.getSeconds();
     console.log("this is the day")
     // new Date().toString("hh:mm tt")
     
     console.log(thisday)
     this.dayofweek=this.getTodayLabel(0);
     this.selectDayOfWeek=this.dayofweek;
     
     
     console.log(month+1);
     console.log(date);
     console.log((hour)+"시");
     console.log(minute);
     console.log(fullyear)
 
     this.month=month+1;
     console.log("this month is : "+this.month);
     this.today=date;
     this.selectDay=this.today;
     this.endofthismonth=this.getDaysInMonth(this.month,fullyear)
     this.dayofweek1=this.getTodayLabel(1);
     this.dayofweek2=this.getTodayLabel(2);
     this.dayofweek3=this.getTodayLabel(3);
     this.dayofweek4=this.getTodayLabel(4);
     this.dayofweek5=this.getTodayLabel(5);
     this.dayofweek6=this.getTodayLabel(6);
     this.dayofweek7=this.getTodayLabel(7);
    
 
      this.nowtime = ""+(month+1)+"월"+date+"일"+(hour)+"시"+minute+"분";
      
      //  this.firedataa.ref("clients").child(this.userId).child("visited").child(this.storeId).update({
      //    "visiteddate":this.nowtime,
      //   "name":this.store.name,
      //   "id":this.storeId,
      //   "address":this.store.address,
      //   "mainImage":this.store.mainImage,
      //   "firstImage":this.store.firstImage,
      //   "secondImage":this.store.secondImage,
      //   "thirdImage":this.store.thirdImage,
      //   "fourthImage":this.store.fourthImage,
      //   "designImage":this.store.designImage,
      //   "designImage1":this.store.designImage1,
      //   "designImage2":this.store.designImage2,
      //   "designImage3":this.store.designImage3,
      //   "designImage4":this.store.designImage4

        
      //  })
    
     console.log(this.storeId);
     this.firedata.child(this.storeId).once('value').then((snapshot) =>{
       var value:any;
       console.log(snapshot.val());

       this.mainImage=snapshot.val().mainImage
       this.firstImage=snapshot.val().firstImage;
       this.secondImage=snapshot.val().secondImage;
       this.disabledTime=snapshot.val().disabledTime;
       for(var result in snapshot.val()){
        if(result=="designarray"){
          for(var a in snapshot.val()[result]){
            this.designFlag=true;
            console.log(snapshot.val()[result][a].url);
            this.designarray.push(snapshot.val()[result][a].url);
          }
          console.log(this.designarray);
        }
       }
       this.categoryy=snapshot.val().category;
       
       

       this.designerImage=snapshot.val().designerImage;
       this.designerImage1=snapshot.val().designerImage1;
       this.designerImage2=snapshot.val().designerImage2;
       this.designerImage3=snapshot.val().designerImage3;
       this.designerImage4=snapshot.val().designerImage4;
       this.designerImage5=snapshot.val().designerImage5;
       this.designerImage6=snapshot.val().designerImage6;
       this.designerImage7=snapshot.val().designerImage7;
       this.designerImage8=snapshot.val().designerImage8;
       this.designerImage9=snapshot.val().designerImage9;
       this.designerImage10=snapshot.val().designerImage10;
       this.designerImage11=snapshot.val().designerImage11;
       this.designerImage12=snapshot.val().designerImage12;
       this.designerImage13=snapshot.val().designerImage13;
       this.designerImage14=snapshot.val().designerImage14;
       this.designerImage15=snapshot.val().designerImage15;
       this.designerImage16=snapshot.val().designerImage16;
       this.designerImage17=snapshot.val().designerImage17;
       this.designerImage18=snapshot.val().designerImage18;
       this.designerImage19=snapshot.val().designerImage19;
       this.designerImage20=snapshot.val().designerImage20;
      

       this.designername=snapshot.val().designername;
       this.designername1=snapshot.val().designername1;
       this.designername2=snapshot.val().designername2;
       this.designername3=snapshot.val().designername3;
       this.designername4=snapshot.val().designername4;
       this.designername5=snapshot.val().designername5;
       this.designername6=snapshot.val().designername6;
       this.designername7=snapshot.val().designername7;
       this.designername8=snapshot.val().designername8;
       this.designername9=snapshot.val().designername9;
       this.designername10=snapshot.val().designername10;
       this.designername11=snapshot.val().designername11;
       this.designername12=snapshot.val().designername12;
       this.designername13=snapshot.val().designername13;
       this.designername14=snapshot.val().designername14;
       this.designername15=snapshot.val().designername15;
       this.designername16=snapshot.val().designername16;
       this.designername17=snapshot.val().designername17;
       this.designername18=snapshot.val().designername18;
       this.designername19=snapshot.val().designername19;
       

       this.thirdImage=snapshot.val().thirdImage;
       this.fourthImage=snapshot.val().fourthImage;
       this.descriptionImage=snapshot.val().descriptionImage;
 
       this.joinn=snapshot.val().join;
       console.log("joned"+this.joinn);
       console.log("1");
       this.slides.push(snapshot.val().mainImage);
    
       
       if(snapshot.val().firstImage!="none"){
        this.slides.push(snapshot.val().firstImage);
      }
      if(snapshot.val().secondImage!="none"){
        this.slides.push(snapshot.val().secondImage);
      }
       if(snapshot.val().thirdImage!="none"){
        this.slides.push(snapshot.val().thirdImage);
      }
      if(snapshot.val().fourthImage!="none"){
        this.slides.push(snapshot.val().fourthImage);
      }
      if(snapshot.val().fifthImage!="none"){
        this.slides.push(snapshot.val().fifthImage);
      }
      if(snapshot.val().sixthImage!="none"){
        this.slides.push(snapshot.val().sixthImage);
      }
       if(snapshot.val().seventhImage!="none"){
        this.slides.push(snapshot.val().seventhImage);
       }
       
       console.log(snapshot.val().eighthImage)
       if(snapshot.val().eighthImage!="none"){
        this.slides.push(snapshot.val().eighthImage);
       }
       if(snapshot.val().ninethImage!="none"){
        this.slides.push(snapshot.val().ninethImage);
       }
       if(snapshot.val().tenthImage!="none"){
        this.slides.push(snapshot.val().tenthImage);
       }
       if(snapshot.val().eleventhImage!="none"){
        this.slides.push(snapshot.val().eleventhImage);
       }
       if(snapshot.val().twelvethImage!="none"){
        this.slides.push(snapshot.val().twelvethImage);
       }
      

       console.log("1");
       this.name=snapshot.val().name
       this.tel=snapshot.val().tel
       this.facility=snapshot.val().facility;
       console.log(this.arrayPrice);
   

       for(var a in snapshot.val().reviewList){
        console.log(a);

        console.log(snapshot.val().reviewList[a].nickname.substring(0,(snapshot.val().reviewList[a].nickname.length-2))+"**");
        this.reviewarray.push({"nickname":snapshot.val().reviewList[a].nickname.substring(0,(snapshot.val().reviewList[a].nickname.length-2))+"**","contents":snapshot.val().reviewList[a].contents});
        console.log(this.reviewarray);
      }
      console.log("below is reviewarray ");
      console.log(this.reviewarray);


       for(var a in snapshot.val().arrayPrice){
         console.log(a);

         this.arrayPrice.push(snapshot.val().arrayPrice[a]);
         console.log(this.arrayPrice);
       }
       for(var a in snapshot.val().designermanagement){
        console.log(a);

        this.designermanagement.push(snapshot.val().designermanagement[a]);
        console.log(this.designermanagement);
      }
      
       this.description=snapshot.val().description
       console.log("1");
       this.address=snapshot.val().address
       this.lat=snapshot.val().lat
       this.lng=snapshot.val().lng
       console.log("mmmmmmmmmmmmmmmmmmmdes")
       var startHour=9
       var startMinute="00";
       var endHour=20
       var endMinute="00";
      //  for(var i=0; i<)
      // alert(snapshot.val().reservationList.length);
      console.log(snapshot.val().reservationList);
      console.log(snapshot.val().reservationList);
      for(var a in snapshot.val().reservationList){
        console.log(a);
        this.reservationDes.push(snapshot.val().reservationList[a]);
      }
       this.reservationDes=snapshot.val().reservationList;
       console.log("finished");
       console.log(snapshot.val().reservationStart!=undefined);
       if(snapshot.val().reservationStart!=undefined){
         console.log("not undefined");
         console.log(snapshot.val().reservationStart)
          startHour=snapshot.val().reservationStart.split(":")[0];
          startMinute=snapshot.val().reservationStart.split(":")[1];
          endHour=snapshot.val().reservationEnd.split(":")[0];
          endMinute=snapshot.val().reservationEnd.split(":")[1];
         //07:00
         console.log(snapshot.val().reservationEnd)
         //22:00
         console.log(snapshot.val().timeInterval)
         var timeinterval=snapshot.val().timeInterval;
         //60
        

       }else{
         console.log("uuuuuuuuuuundefined!!!");
         timeinterval=60;
       }

       console.log("timeinterval : "+timeinterval);
       if(timeinterval==30){
   
        console.log("minus start");
        console.log(endHour-startHour);
        console.log(startHour);
        console.log(Number(startHour))
        var newHour=Number(startHour);
        var nnewHour=Number(startHour)+":00";
        this.reservationfinal.push({"disabled":false,"time":newHour+":00"})
        this.reservationfinal.push({"disabled":false,"time":newHour+":30"})
        for(var i=0; i<endHour-startHour-1; i++){
          newHour=Number(newHour)+1;
          console.log(newHour);
          this.reservationfinal.push({"disabled":false,"time":newHour+":00"})
          this.reservationfinal.push({"disabled":false,"time":newHour+":30"})
        }
        console.log(this.reservationfinal);
      }
      if(timeinterval==90){

       console.log("minus start");
       console.log(endHour-startHour);
       console.log(startHour);
       console.log(Number(startHour))
       var newHour=Number(startHour);
       var nnewHour=Number(startHour)+":00";
       //7:00 
       //8:30
       //10:00
       if(startMinute=="00"){
         this.reservation.push({"time":newHour+":00"});
         var flag=false;
       }else{
         this.reservation.push({"time":newHour+":30"});
         var flag=true;
       }
       console.log(this.reservation);
      
       for(var i=0; i<endHour-startHour-1; i++){
         if(endHour<newHour){
           console.log("finished")
         }else{
           newHour=Number(newHour)+1;
           console.log(newHour)
           console.log(flag);
           if(newHour<endHour){
            if(!flag){
              flag=true;
              //{"disabled":false,"time":newHour+":30"}
              this.reservationfinal.push({"disabled":false,"time":(newHour)+":30"});
            }else{
              flag=false;
              newHour=newHour+1;
              this.reservationfinal.push({"disabled":false,"time":(newHour)+":00"});
            }
           }
          
         }
        
       }
       console.log(this.reservationfinal);
     }

      if(timeinterval==60){

        console.log("minus start");
        console.log(endHour-startHour);
        console.log(startHour);
        console.log(Number(startHour))
        var arraydisabled=[];
        if(this.disabledTime!=undefined){
          arraydisabled=this.disabledTime.split(",");
        }else{

        }
        

        console.log('disabled')
        console.log(arraydisabled);
        var nnewHour=Number(startHour)+":00";

        var newHour=Number(startHour);
        var flag=false;
        // for(var i=0; i<arraydisabled.length; i++){
        //   console.log(arraydisabled[i]);
         
        //   if(arraydisabled[i]==nnewHour){
        //    this.reservation.push({"time":nnewHour,"disabled":true,"rtime":newHour});
        //    console.log("return come")
        //    flag=true;
        //   }else{
        //     if(!flag){
        //      // this.reservation.push({"time":nnewHour,"disabled":false});
        //     }
          
        //   }
        // }
        console.log("return exit")
        for(var i=0; i<=endHour-startHour; i++){
          console.log("for loop")
          console.log(endHour);
          console.log(startHour);
         
          var nnewHour=Number(newHour)+":00";
          newHour=Number(newHour)+1;
         
          console.log("adding all reservation");
          this.allreservation.push({"time":nnewHour,"disabled":false,"rtime":newHour})
          //7:00, 8:00, 9:00 ...
          console.log(nnewHour);
          var flag2=false;
          // for(var j=0; j<arraydisabled.length; j++){
          //   //7:00, 8:00


          //   console.log(arraydisabled[j]+"/????//"+nnewHour);
          //   if(arraydisabled[j]==nnewHour){
          //    flag2=true;
          //     console.log("matched!")
          //    this.reservation.push({"time":nnewHour,"disabled":true,"rtime":newHour});
          //    this.disabledreservation.push(nnewHour);
          //   }else{
          //    console.log("not matched!")
          //     if(!flag2){
          //      // this.reservation.push({"time":nnewHour,"disabled":false});
          //     }
          //   }
          // }
          console.log("all reserve");
          console.log(this.allreservation);
          console.log("disabled reserve");
          console.log(this.disabledreservation);
          for(var i=0; i<this.allreservation.length; i++){
            for(var j=0; j<this.disabledreservation.length; j++){
             if(this.allreservation[i].time==this.disabledreservation[j]){
               console.log(this.allreservation[i].time+"가 일치하므로 이걸 삭제한닷")
               this.allreservation.splice(i,1);
               break;
             }
            }
          }
          console.log(this.reservation)
          console.log(this.allreservation);
      //     var array3 = this.reservation.concat(this.allreservation);
      //     console.log(array3);
      //     var sortingField = "rtime";
      //  array3.sort(function(a, b) { // 오름차순
      //    console.log(a[sortingField] - b[sortingField]);
      //    return a[sortingField] - b[sortingField];
      //  })
      //    console.log(array3);
         this.reservationfinal=this.allreservation;
        }
      }
       console.log("search comeeee"+timeinterval);
       this.map=this.loadMap();
       console.log(this.map);
      
       console.log(this.lat)
       console.log(this.lng);
       var marker = new naver.maps.Marker({
         position: new naver.maps.LatLng(this.lat,this.lng),
         map: this.map
     });
     });
  }
  generateReview(){
   
    this.firedata.child(this.storeId).child("reviewList").once('value').then((snapshot) =>{
      var value:any;
      console.log(snapshot.val());
      this.reviewarray=[];
      for(var a in snapshot.val()){

       this.reviewarray.push(snapshot.val()[a]);
   
     }
     console.log(this.reviewarray);
    //  return;

    });
  }
  reviewmore(){
    this.reviewmoreflag=true;
  }
  enterreview(){

    this.firedata.child(this.storeId).child("reservationList").once("value",(snap)=>{
      console.log(snap.val());
      var flag=false;
      for(var a in snap.val()){

        
        console.log(snap.val()[a].requestor)
        if(snap.val()[a].requestor!=undefined){
          if(snap.val()[a].requestor==this.userId){

            flag=true;

          }
        }
      }

      if(!flag){
        window.alert("예약자만 리뷰를 남길수있습니다. ");
      }else{
        this.firedata.child(this.storeId).child("reviewList").push({"nickname":this.nick,"contents":this.reviewtowrite});
        this.generateReview();
        this.viewCtrl.dismiss();
      }

    });

    console.log(this.reviewtowrite);
    console.log(this.storeId);
    console.log(this.userId);
    console.log(this.nick);
    // 



  }
  gotoshare(){
window.alert(this.categoryy);
  let feedLink: KLLinkObject = {
    androidExecutionParams: "param1=value1&param2=value2",
    iosExecutionParams: "param1=value1&param2=value2"
  };
  let feedContent: KLContentObject = {
    title: '토탈 뷰티 앱 “네가 젤 예뻐”',
    desc:this.name+"("+this.address+")/"+this.categoryy,
    link: feedLink,
    imageURL: 'http://i3.ruliweb.com/img/19/03/17/1698a25f6353051.png'
  };
  feedContent.imageWidth="750";
  feedContent.imageHeight="500";
  let feedTemplate: KLFeedTemplate = {
    content: feedContent
  };
  this.kakao
    .sendLinkFeed(feedTemplate)
    .then(
      res => {
        console.log(res);
      },
      err => {
        alert(err);
        console.log(err);
      }
    )
    .catch(err => {
      console.log(err);
    });
  }
  gotoback(){
    // this.matchedKeyword="t";
    this.viewCtrl.dismiss();
  }
   getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  gotoalbum(i){
    console.log("i is : "+i);
    var selectedImage="";
      selectedImage=this.designarray[i];

    

    var array=[];
    this.navCtrl.push(AlbumpagePage,{"selected":selectedImage,"albumList":this.designarray})
  }
call(tel){
  console.log(tel);

this.callNumber.callNumber(tel, true)
.then(res => console.log('Launched dialer!', res))
.catch(err => console.log('Error launching dialer', err));
}

  loadMap(){

    var map = new naver.maps.Map('mapp', {
      center: new naver.maps.LatLng(this.lat,this.lng),
    enableWheelZoom: true,
    enableDragPan: true,
    enableDblClickZoom: false,
    mapMode: 0,
    activateTrafficMap: false,
    activateBicycleMap: false,
    minMaxLevel: [1, 14],
      zoom: 10
  });

  return map;
}

enlarge(v){
  console.log(v);
  this.viewer.show(v);
}
 getTodayLabel(v) {
   console.log("v is : "+v);
  var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
  var today = new Date().getDay();
  var todayLabel;

    if(v==0){
      todayLabel = week[today];
    }else if(v==1){
      todayLabel = week[today+1];
      if(todayLabel==undefined){
        todayLabel = week[this.flag];
        this.flag+=1;
      }
      this.firstdate=this.today+1;
      // if(this.today+1>this.endofthismonth){
      //   todayLabel="false";
      // }
      if(this.firstdate-this.endofthismonth==1){
        this.newmonth=1;
        this.firstdate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }else if(this.today+1>this.endofthismonth){
        this.firstdate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }

    }else if(v==2){
      console.log("222"+this.flag)
      todayLabel = week[today+2];
      if(todayLabel==undefined){
        console.log(this.flag+"flag"+week[this.flag])
        todayLabel = week[this.flag];
      }
      this.seconddate=this.today+2;
     
      if(this.seconddate-this.endofthismonth==1){
        this.newmonth=1;
        this.seconddate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }else if(this.today+2>this.endofthismonth){
        this.seconddate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }
    }else if(v==3){
      
      todayLabel = week[today+3];
      if(todayLabel==undefined){
        todayLabel = week[this.flag];
        this.flag+=1;
      }
      this.thirddate=this.today+3;
  
      if(this.today+3-this.endofthismonth==1){
        // todayLabel="false";
        this.newmonth=1;
        this.thirddate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }else if(this.today+3>this.endofthismonth){
        this.thirddate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }
    }else if(v==4){
      todayLabel = week[today+4];
      if(todayLabel==undefined){
       
        todayLabel = week[this.flag];
        this.flag+=1;
      }
      this.fourthdate=this.today+4;
      if(this.today+4-this.endofthismonth==1){
        this.newmonth=1;
        this.fourthdate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }else if(this.today+4>this.endofthismonth){
        this.fourthdate=this.newmonth;
        this.newmonth=this.newmonth+1;
        // todayLabel="false";
      }
    }else if(v==5){
      todayLabel = week[today+5];
      if(todayLabel==undefined){
        todayLabel = week[this.flag];
        this.flag+=1;

      }
      this.fifthdate=this.today+5;
      if(this.today+5>this.endofthismonth){
        this.fifthdate=this.newmonth;
        this.newmonth=this.newmonth+1;
        // todayLabel="false";
      }
    }else if(v==6){
      todayLabel = week[today+6];
      if(todayLabel==undefined){
        todayLabel = week[this.flag];
        this.flag+=1;
        
      }
      this.sixthdate=this.today+6;
      if(this.today+6>this.endofthismonth){
        // todayLabel="false";
        this.sixthdate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }
    }else if(v==7){
      todayLabel = week[today+7];
      if(todayLabel==undefined){
        todayLabel = week[this.flag];
        this.flag+=1;
      }
      this.seventhdate=this.today+7;
      if(this.today+7>this.endofthismonth){
        // todayLabel="false";
        this.seventhdate=this.newmonth;
        this.newmonth=this.newmonth+1;
      }
    }
  
  console.log(todayLabel);
 
    
  
  return todayLabel;
}
reloadSchedule(){
  console.log("reloadschedule");
  console.log(this.designermanagement);
  
  console.log(this.designermanagement[0]);
  for(var q in this.designermanagement[0]){
    console.log(this.designermanagement[0][q]);
    if(this.selectedDesigner==this.designermanagement[0][q].name){
      this.offduty.push(this.designermanagement[0][q].date);
    }
  }
  // for(var i =0; i<this.designermanagement[0].length; i++){
  //   console.log(this.designermanagement[0][i]);
  //   console.log(this.designermanagement[0][i].name);

  //   if(this.selectedDesigner==this.designermanagement[0][i].name){
  //     this.offduty=this.designermanagement[0][i].date
  //   }
    
  // }
  console.log(this.offduty);
  for(var i=0; i<this.reservationfinal.length; i++){

        this.reservationfinal[i].disabled=false;
   
  }
  this.matchedDay=[];
  console.log(this.selectedDesigner);
  console.log(this.reservationDes);
  console.log(this.reservationDes);
  for(var a in this.reservationDes){
    console.log(a);
    console.log(this.reservationDes[a]);
    console.log(this.reservationDes[a].designer);
    console.log(this.reservationDes[a].time);
    console.log(this.reservationDes[a].day);
    if(this.selectedDesigner==this.reservationDes[a].designer){
      if(this.month==this.reservationDes[a].month){

        console.log("matched month"+this.selectDay);
      
        if(this.reservationDes[a].day==this.selectDay){
          this.matchedDay.push(this.reservationDes[a].time);
        }
      }
    }
   
    console.log(this.reservationDes[a].month);
  }
  console.log(this.matchedDay);
  console.log(this.reservationfinal);
  for(var i=0; i<this.reservationfinal.length; i++){

    for(var j=0; j<this.matchedDay.length; j++){
      if(this.reservationfinal[i].time==this.matchedDay[j]){
        console.log(this.reservationfinal[i]);
        this.reservationfinal[i].disabled=true;
      }
    }
   
  }
 

}
clickdesigner2(v){
  this.selecteddesignernumber=v;
  if(v==0){
    this.firstimage=!this.firstimage;
    this.selectedDesigner=this.designername;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image8=true;
    this.image9=true;
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
   
  }
  if(v==1){
    this.selectedDesigner=this.designername1;
    this.secondimage=!this.secondimage;
    this.firstimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image8=true;
    this.image9=true;
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
  }
  if(v==2){
    this.selectedDesigner=this.designername2;
    this.thirdimage=!this.thirdimage;
    this.secondimage=true;
    this.firstimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image8=true;
    this.image9=true;
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
  }
  if(v==3){
    this.selectedDesigner=this.designername3;
    this.fourthimage=!this.fourthimage;
    this.firstimage=true;
    this.secondimage=true;
    this.firstimage=true;
    this.thirdimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image8=true;
    this.image9=true;
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername3;
  }
  if(v==4){
    this.selectedDesigner=this.designername4;
    this.fifthimage=!this.fifthimage;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image8=true;
    this.image9=true;
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername4;
  } if(v==5){
    this.sixthimage=!this.sixthimage;
    this.secondimage=true;
    this.firstimage=true;
    this.fourthimage=true;
    this.thirdimage=true;
    this.fifthimage=true;
    this.seventhimage=true;
    this.image8=true;
    this.image9=true;
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername5;
  }
  if(v==6){
    this.seventhimage=!this.seventhimage;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fifthimage=true;
    this.fourthimage=true;
    this.sixthimage=true;
    this.image8=true;
    this.image9=true;
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername6;
  }
  if(v==7){
    this.image8=!this.image8;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername7;
  }if(v==8){
    this.image9=!this.image9;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
   
    this.image10=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername8;
  }if(v==9){
    this.image10=!this.image10;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername9;
  }if(v==10){
    this.image11=!this.image11;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername10;
  }if(v==11){
    this.image12=!this.image12;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage); 
    this.selectedDesigner=this.designername11;

  }if(v==12){
    this.image13=!this.image13;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername12;
  }if(v==13){
    this.image14=!this.image14;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername13;
  }if(v==14){
    this.image15=!this.image15;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername14;
  }if(v==15){
    this.image16=!this.image16;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername15;
  }if(v==16){
    this.image17=!this.image17;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername16;
  }if(v==17){
    this.image18=!this.image18;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    this.selectedDesigner=this.designername17;
    console.log(this.secondimage);
  }if(v==18){
    this.image19=!this.image19;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image20=true;
    console.log(this.firstimage);
    console.log(this.secondimage);
    this.selectedDesigner=this.designername18;
  }if(v==19){
    this.image20=!this.image20;
    this.firstimage=true;
    this.secondimage=true;
    this.thirdimage=true;
    this.fourthimage=true;
    this.fifthimage=true;
    this.sixthimage=true;
    this.seventhimage=true;
    this.image9=true;
    this.image11=true;
    this.image12=true;
    this.image13=true;
    this.image14=true;
    this.image15=true;
    this.image16=true;
    this.image17=true;
    this.image18=true;
    this.image19=true;
    this.image20=true;
    console.log(this.firstimage);
    this.selectedDesigner=this.designername19;
    console.log(this.secondimage);
  }

  console.log(this.selectedDesigner);
  this.reloadSchedule();
}
clickdesigner(v){
  
  console.log(v);
  console.log(this.image8);
  this.selecteddesignernumber=v;
  if(v==0){
    if(this.firstimage==false){
      //나를 false 로 만들어야한다. 
      this.selectedDesigner="none";
      console.log(this.selectedDesigner)
    }else{
      //나 제외하곤 모두 false; 나만 true
      this.secondimage=false;
      this.thirdimage=false;
      this.fourthimage=false;
      this.fifthimage=false;
      this.sixthimage=false;
      this.seventhimage=false;
      this.image9=false;
      this.image10=false;
      this.image11=false;
      this.image12=false;
      this.image13=false;
      this.image14=false;
      this.image15=false;
      this.image16=false;
      this.image17=false;
      this.image18=false;
      this.image19=false;

      console.log(this.secondimage);
      console.log(this.thirdimage);
      console.log(this.image8);
      // this.clickdesigner(1);
      // this.clickdesigner(2);
      // this.clickdesigner(3);
      // this.clickdesigner(4);
      // this.clickdesigner(5);
      // this.clickdesigner(6);
      console.log(this.image8);
      this.selectedDesigner=this.designername;
    console.log(this.selectedDesigner)
      this.reloadSchedule();
    }
    console.log(this.selectedDesigner)
    this.firstimage=!this.firstimage;
    console.log(this.image8);
  }else if(v==1){
    if(this.secondimage==false){
      //reload schedule 
      this.selectedDesigner="none";
      console.log(this.selectedDesigner)
    }else{
      this.firstimage=false;
      this.thirdimage=false;
      this.fourthimage=false;
      this.fifthimage=false;
      this.sixthimage=false;
      this.seventhimage=false;
      this.image9=false;
      this.image10=false;
      this.image11=false;
      this.image12=false;
      this.image13=false;
      this.image14=false;
      this.image15=false;
      this.image16=false;
      this.image17=false;
      this.image18=false;
      this.image19=false;
      this.clickdesigner(0);
      this.clickdesigner(2);
      this.clickdesigner(3);
      this.clickdesigner(4);
      this.clickdesigner(5);
      this.clickdesigner(6);
      
      this.selectedDesigner=this.designername1;
    console.log("selected designer "+this.selectedDesigner)
      this.reloadSchedule();
    }
    console.log(this.selectedDesigner)
    this.secondimage=!this.secondimage;
    this.selectedDesigner=this.designername1;
  }else if(v==2){
    if(this.thirdimage==false){
      //reload schedule 
      this.selectedDesigner="none";
      console.log(this.selectedDesigner)
    }else{
      this.firstimage=false;
     
      this.secondimage=false;
      this.fourthimage=false;
      this.fifthimage=false;
      this.sixthimage=false;
      this.seventhimage=false;
      this.image9=false;
      this.image10=false;
      this.image11=false;
      this.image12=false;
      this.image13=false;
      this.image14=false;
      this.image15=false;
      this.image16=false;
      this.image17=false;
      this.image18=false;
      this.image19=false;
      this.clickdesigner(1);
      this.clickdesigner(0);
      this.clickdesigner(3);
      this.clickdesigner(4);
      this.clickdesigner(5);
      this.clickdesigner(6);
     
      this.selectedDesigner=this.designername2;
    console.log("selected designer "+this.selectedDesigner)
      this.reloadSchedule();
    }
    console.log(this.selectedDesigner)
    this.thirdimage=!this.thirdimage;
    this.selectedDesigner=this.designername2;
  }else if(v==3){
    if(this.fourthimage==false){
      //reload schedule 
      this.selectedDesigner="none";
      console.log(this.selectedDesigner)
    }else{
      this.firstimage=false;
   
      this.secondimage=false;
      this.thirdimage=false;
      this.fifthimage=false;
      this.sixthimage=false;
      this.seventhimage=false;
      this.image9=false;
      this.image10=false;
      this.image11=false;
      this.image12=false;
      this.image13=false;
      this.image14=false;
      this.image15=false;
      this.image16=false;
      this.image17=false;
      this.image18=false;
      this.image19=false;
      this.clickdesigner(1);
      this.clickdesigner(2);
      this.clickdesigner(0);
      this.clickdesigner(4);
      this.clickdesigner(5);
      this.clickdesigner(6);
     
      this.selectedDesigner=this.designername3;
    console.log("selected designer "+this.selectedDesigner)
      this.reloadSchedule();
    }
    console.log(this.selectedDesigner)
    this.fourthimage=!this.fourthimage;
    this.selectedDesigner=this.designername3;
  }else if(v==4){
    if(this.fifthimage==false){
      //reload schedule 
      this.selectedDesigner="none";
      console.log(this.selectedDesigner)
    }else{
      this.firstimage=false;
      this.secondimage=false;
      this.thirdimage=false;
      this.fourthimage=false;
      this.sixthimage=false;
      this.seventhimage=false;
      this.image9=false;
      this.image10=false;
      this.image11=false;
      this.image12=false;
      this.image13=false;
      this.image14=false;
      this.image15=false;
      this.image16=false;
      this.image17=false;
      this.image18=false;
      this.image19=false;
      this.clickdesigner(1);
      this.clickdesigner(2);
      this.clickdesigner(3);
      this.clickdesigner(0);
    
      this.clickdesigner(19);
      this.selectedDesigner=this.designername4;
    console.log("selected designer "+this.selectedDesigner)
      this.reloadSchedule();
    }
    console.log(this.selectedDesigner)
    this.fifthimage=!this.fifthimage;
    this.selectedDesigner=this.designername4;
  }else if(v==5){
    if(this.sixthimage==false){
      //reload schedule 
      this.selectedDesigner="none";
      console.log(this.selectedDesigner)
    }else{
      this.firstimage=false;
      this.secondimage=false;
      this.thirdimage=false;
      this.fourthimage=false;
      this.fifthimage=false;
      
      this.seventhimage=false;
      this.image9=false;
      this.image10=false;
      this.image11=false;
      this.image12=false;
      this.image13=false;
      this.image14=false;
      this.image15=false;
      this.image16=false;
      this.image17=false;
      this.image18=false;
      this.image19=false;
      this.clickdesigner(1);
      this.clickdesigner(2);
      this.clickdesigner(3);
      this.clickdesigner(4);
      this.clickdesigner(0);
     
      this.selectedDesigner=this.designername5;
    console.log("selected designer "+this.selectedDesigner)
      this.reloadSchedule();
    }
    console.log(this.selectedDesigner)
    this.sixthimage=!this.sixthimage;
    this.selectedDesigner=this.designername5;
  }else if(v==6){
    if(this.seventhimage==false){
      //reload schedule 
      this.selectedDesigner="none";
      console.log(this.selectedDesigner)
    }else{
      this.firstimage=false;
      this.secondimage=false;
      this.thirdimage=false;
      this.fourthimage=false;
      this.fifthimage=false;
      this.sixthimage=false;
      this.image9=false;
      this.image10=false;
      this.image11=false;
      this.image12=false;
      this.image13=false;
      this.image14=false;
      this.image15=false;
      this.image16=false;
      this.image17=false;
      this.image18=false;
      this.image19=false;
      this.clickdesigner(1);
      this.clickdesigner(2);
      this.clickdesigner(3);
      this.clickdesigner(4);
      this.clickdesigner(5);
      this.clickdesigner(0);
     
      this.selectedDesigner=this.designername6;
    console.log("selected designer "+this.selectedDesigner)
      this.reloadSchedule();
    }
    console.log(this.selectedDesigner)
    this.seventhimage=!this.seventhimage;
    this.selectedDesigner=this.designername6;
  }
  // else if(v==7){

  //   if(this.image8==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(6);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername7;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.image8;
  //   this.selectedDesigner=this.designername7;
  // }
  // else if(v==8){
  //   if(this.image9==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(6);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername8;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.image9=!this.image9;
  //   this.selectedDesigner=this.designername8;
  // }else if(v==9){
  //   if(this.image10==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername9;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.image10=!this.image10;
  //   this.selectedDesigner=this.designername9;
  // }
  //else if(v==10){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }else if(v==11){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }else if(v==12){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }else if(v==13){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }else if(v==14){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }else if(v==15){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }else if(v==16){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(17);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }else if(v==17){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(18);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }else if(v==18){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.clickdesigner(19);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }
  // else if(v==19){
  //   if(this.seventhimage==false){
  //     //reload schedule 
  //     this.selectedDesigner="none";
  //     console.log(this.selectedDesigner)
  //   }else{
  //     this.firstimage=false;
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false; 
  //     this.secondimage=false;
  //     this.thirdimage=false;
  //     this.fourthimage=false;
  //     this.fifthimage=false;
  //     this.sixthimage=false;
  //     this.seventhimage=false;
  //     this.image8=false;
  //     this.image9=false;
  //     this.image10=false;
  //     this.image11=false;
  //     this.image12=false;
  //     this.image13=false;
  //     this.image14=false;
  //     this.image15=false;
  //     this.image16=false;
  //     this.image17=false;
  //     this.image18=false;
  //     this.image19=false;
  //     this.clickdesigner(1);
  //     this.clickdesigner(2);
  //     this.clickdesigner(3);
  //     this.clickdesigner(4);
  //     this.clickdesigner(5);
  //     this.clickdesigner(0);
  //     this.clickdesigner(7);
  //     this.clickdesigner(8);
  //     this.clickdesigner(9);
  //     this.clickdesigner(10);
  //     this.clickdesigner(11);
  //     this.clickdesigner(12);
  //     this.clickdesigner(13);
  //     this.clickdesigner(14);
  //     this.clickdesigner(15);
  //     this.clickdesigner(16);
  //     this.clickdesigner(17);
  //     this.selectedDesigner=this.designername6;
  //   console.log("selected designer "+this.selectedDesigner)
  //     this.reloadSchedule();
  //   }
  //   console.log(this.selectedDesigner)
  //   this.seventhimage=!this.seventhimage;
  //   this.selectedDesigner=this.designername6;
  // }

}
getToday(v) {
  var today = new Date().getDay();
  console.log("today is "+today);
  var todayLabel;
    if(v==0){
      todayLabel = today
    }else if(v==1){
      todayLabel = today+1;
    }
  
  
 
    
  
  return todayLabel;
}


selectDayy(v){
  console.log(v);
 
  if(v==0){

    this.first=true;
    this.second=false;
    this.third=false;
    this.fourth=false;
    this.fifth=false;
    this.sixth=false;
    this.seventh=false;
    this.eighth=false;
    //today selected
  }else if(v==1){
    this.first=false;
    this.second=true;
    this.third=false;
    this.fourth=false;
    this.fifth=false;
    this.sixth=false;
    this.seventh=false;
    this.eighth=false;
    //next day selected

  }else if(v==2){
    this.first=false;
    this.second=false;
    this.third=true;
    this.fourth=false;
    this.fifth=false;
    this.sixth=false;
    this.seventh=false;
    this.eighth=false;
  }else if(v==3){
    this.first=false;
    this.second=false;
    this.third=false;
    this.fourth=true;
    this.fifth=false;
    this.sixth=false;
    this.seventh=false;
    this.eighth=false;
  }else if(v==4){
    this.first=false;
    this.second=false;
    this.third=false;
    this.fourth=false;
    this.fifth=true;
    this.sixth=false;
    this.seventh=false;
    this.eighth=false;
  }else if(v==5){
    this.first=false;
    this.second=false;
    this.third=false;
    this.fourth=false;
    this.fifth=false;
    this.sixth=true;
    this.seventh=false;
    this.eighth=false;
  } else if(v==6){
    this.first=false;
  this.second=false;
  this.third=false;
  this.fourth=false;
  this.fifth=false;
  this.sixth=false;
  this.seventh=true;
  this.eighth=false;
  }else if(v==7){
    this.first=false;
    this.second=false;
    this.third=false;
    this.fourth=false;
    this.fifth=false;
    this.sixth=false;
    this.seventh=false;
    this.eighth=true;
  }
  this.selectDayOfWeek=this.getTodayLabel(v);
  this.selectDay=this.today+v;
console.log(this.selecteddesignernumber);
  this.reloadSchedule();
  console.log(this.today+v);
  console.log(this.selectDay);
  console.log(this.offduty);
  for(var i=0; i<this.offduty.length; i++){
    console.log(this.offduty[i].split("-")[2])
    if(this.selectDay==this.offduty[i].split("-")[2]){
      window.alert("오늘은 오프!")
      this.makeAllOff();
      return;
    }
  }
  console.log(this.selectDayOfWeek)
}
makeAllOff(){
  for(var i=0; i<this.reservationfinal.length; i++){
    this.reservationfinal[i].disabled=true;
  }
  console.log(this.reservationfinal);
}
  ngOnInit(){
         
  
  }
  join(r){
    console.log(this.selectDayOfWeek);
    console.log(this.selectDay);
    console.log(this.month);
    console.log(r.time);
    console.log(this.selectedDesigner);
    if(this.selectedDesigner!="none"){
      console.log("r is :"+r);
     
      this.navCtrl.push(JoinedPage,{"mainImage":this.mainImage,"idd":this.userId,"storeName":this.name,"time":r,"store":this.storeId,"dayofweek":this.selectDayOfWeek,"day":this.selectDay,"month":this.month,"designer":this.selectedDesigner})
    }else{
      alert("디자이너를 선택해주세요")
    }
    // 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StoredetailPage');
  }


}
export interface KLButtonObject {
  title: string;
  link: KLLinkObject;
}
export interface KLContentObject {
  title: string;
  link: KLLinkObject;
  imageURL: string;
  desc?: string;
  imageWidth?: string;
  imageHeight?: string;
}
export interface KLLinkObject {
  webURL?: string;
  mobileWebURL?: string;
  androidExecutionParams?: string;
  iosExecutionParams?: string;
}
export interface KLFeedTemplate {
  content: KLContentObject;
  buttonTitle?: string;
  buttons?: KLButtonObject[];
}
