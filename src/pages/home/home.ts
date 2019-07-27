import { Component,ViewChild } from '@angular/core';
import { NavController,IonicPage,ViewController,AlertController,MenuController,Platform,LoadingController,NavParams } from 'ionic-angular';
import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk';
import firebase from 'firebase';
import { Scroll } from 'ionic-angular';
import {SearchPage}from '../search/search';
import { StoredetailPage } from '../storedetail/storedetail';
import { Geolocation } from '@ionic-native/geolocation';
import { Store } from '../../models/store';
import {LoginPage} from '../login/login';
import { RequestPage } from '../request/request';
import { Storage } from '@ionic/storage';
import { MypagePage } from '../mypage/mypage';
import { ManagementPage } from '../management/management';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import { StoremanagementPage } from '../storemanagement/storemanagement';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Device } from '@ionic-native/device';

declare var naver: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})

export class HomePage {
  @ViewChild('scroll') scroll: any;
  superdistance:any;
  userUid:any;
  titlee:any=""
  category3:any;
  categoryflag:any;
  x:any;
  closeflag:any="false"
  y:any;
  stname:any;
  viewCtrl:any;
  userId:any;
  selectedbutton:any="All"
  storeSelected:any;
  logined="";
  rootdata=firebase.database();
  storearrayfromkeyword=[];
  firedata = firebase.database().ref('store');
  location:any;
  flagtostart:any=true;
  store={} as Store
  lat:any;
  id:any;
  storemention:any;
  denyreason:any;
  nick:any;
  lng:any;
  storearray=[];
  imageUrl:any;
  myStoreId:any;
  name:any;
  flag:any;

  loading:any;
  requestFlag:any="입점신청";
  matchedKeyword="t";
  matchedStation="";
 

 
  
  category2(value){
    console.log(value);
    this.generateStore(value);
    this.selectedbutton=value;
}
  mypage(){

    this.navCtrl.push(MypagePage,{"userid":this.userId});
  }
  
  ngOnInit(){
    console.log("ngOnInit");
  }
  ionViewWillEnter(){
    console.log("view did enterrrrrrrr"+this.userUid);
    
  }
  ionViewDidLoad(){
    console.log("view did loadeddddd");
    console.log(this.scroll);
    setTimeout(()=>{
      this.titlee="카테고리"
    },500)
    
    // this.scroll.nativeElement.scrollLeft = 500;
  //   var el = document.getElementById('ha');
  //  el.scrollIntoView({ behavior: "smooth" });

  
    this.userUid=this.device.uuid;
console.log("ionic view didloaddddded"+this.flagtostart);

this.rootdata.ref().child("distance").on('value',(snap)=>{

  console.log("newdistance")
  console.log(snap.val());
  this.superdistance=snap.val().value;
})



    /*
    
    925391539
main.js:176 정긍정
main.js:177 https://k.kakaocdn.net/dn/yBGEM/btqo9Jhcla5/nxAiHGASvr8gI8Mx0muCHK/profile_110x110c.jpg
main.js:178 true
*/

console.log("flagtostart");
console.log(this.flagtostart);
if(this.flagtostart){

 
  console.log("starting to positioning");
  if(this.categoryflag=="normal"){
    this.generateStore(this.category3)
  }else if(this.categoryflag=="keyword"){
    this.selectedbutton="All"
    console.log(this.storearrayfromkeyword);
    this.generateStore("keyword")
  }else if(this.categoryflag=="station"){
    this.selectedbutton="All"
    console.log(this.storearrayfromkeyword);
    this.matchedStation=this.navParams.get("stname")
    this.generateStore("station")
  }
 

  this.flagtostart=false;
}

  }
  
  ionViewDidEnter(){


  }
  gotoback(){

    this.closeflag="true";
    this.matchedStation="";
    // this.matchedKeyword="t";
    this.titlee="";
    this.viewCtrl.dismiss();
  }
  // starttotrack(){
  //   console.log("starttotracking come")
  //   this.location="위치정보를 받아오는중...";
  //   let options = {
  //     timeout: 15000,
  //     enableHighAccuracy: false
  //     }
  //   let GPSoptions = {timeout: 15000, enableHighAccuracy: false, maximumAge: 3600};
  // this.geo.getCurrentPosition(options).then(resp=>{

  //   this.location="위치...";
   
  //   if(this.loading!=null){
  //     this.loading.dismiss();
  //   }
  
  //   this.lat=resp.coords.latitude;
  //   this.lng=resp.coords.longitude;
  //   this.lat=37.565924;
  //   this.lng=126.976895;

  
  //   console.log("currentlocatipn"+this.lat+"///"+this.lng);

  
  //   this.generateStore('All')
  //   naver.maps.Service.reverseGeocode({
  //     location: new naver.maps.LatLng(this.lat, this.lng),
  // }, (status,response)=> {
  //     if (status !== naver.maps.Service.Status.OK) {
  //       console.log("status not ok");
  //         console.log(status);
  //     }else{
  //       console.log("status  ok");
  //       console.log(status);
  //     }

  //     var result = response.result, // 검색 결과의 컨테이너
  //         items = result.items; // 검색 결과의 배열
  //         console.log(result);
  //         console.log(items[0].address);
  //         var res=items[0].address.split(" ");
  //         console.log(res.length);
  //         for (var i=0; i<res.length; i++){
  //           console.log(res[i]);
  //         }
  //         console.log(res[0]+"/"+res[1]+"//"+res[2]);
  //         this.location=res[0]+" "+res[1]+" "+res[2];

  //     // do Something
  // });
  // }).catch((e)=>{
  //   this.location="position error"+e;
  //   if(this.loading!=null){
  //     this.loading.dismiss();
  //   }
  //     // this.loading.dismiss();
  //     this.lat=37.565924;
  //     this.lng=126.976895;
  //   this.generateStore('All')
  //   console.log("geo loading error:");
  //   console.log(e);
  //   return;
   
  // });
  // }
  locate(){
    console.log(this.lat+"//"+this.lng+"////"+this.userId+"///"+this.location);
    this.navCtrl.push(SearchPage,{"lat":this.x,"lng":this.y,"userId":this.userId,"location":this.location}).then(() => {
      this.navCtrl.getActive().onDidDismiss(data => {
        //on dismiss from menu add page
        console.log("SearchPage add on dismiss");
        if(data!=undefined){
          var flag=data.flag;
  
          this.firedata.once('value').then((snapshot) =>{
            this.storearray=[];
            var value:any;
            for(var result in snapshot.val()){
             
             
                var arrayX = [];
                var arrayY= [];
                var arrayApproval= [];
                arrayX.push(snapshot.val()[result].lat)
                arrayY.push(snapshot.val()[result].lng);
                arrayApproval.push(snapshot.val()[result].approval);
                for(var i=0; i<arrayX.length; i++){
                  var distance=this.calcCrow(arrayX[i],arrayY[i],data.x,data.y).toFixed(2);
                 if(Number(distance)*1000<this.superdistance){
                    if(arrayApproval[i]==true||arrayApproval[i]=="true"){
                      if(this.selectedbutton=="All"){
                        if(snapshot.val()[result].reservationStart!=undefined){
                          this.storearray.push({"reservationStart":snapshot.val()[result].reservationStart,"category":snapshot.val()[result].category,"reservationEnd":snapshot.val()[result].reservationEnd,"reservationNumber":snapshot.val()[result].reservationNumber,"timeInterval":snapshot.val()[result].timeInterval,"promotion":snapshot.val()[result].promotion,"dis":Number(distance)*1000,"name":snapshot.val()[result].name,"id":snapshot.val()[result].id,"address":snapshot.val()[result].address,"mainImage":snapshot.val()[result].mainImage,"firstImage":snapshot.val()[result].firstImage,"secondImage":snapshot.val()[result].secondImage,"thirdImage":snapshot.val()[result].thirdImage,"fourthImage":snapshot.val()[result].fourthImage,"descriptionImage":snapshot.val()[result].descriptionImage,"approval":snapshot.val()[result].approval})
                        }else{
                          this.storearray.push({"promotion":snapshot.val()[result].promotion,"dis":Number(distance)*1000,"name":snapshot.val()[result].name,"id":snapshot.val()[result].id,"address":snapshot.val()[result].address,"category":snapshot.val()[result].category,"mainImage":snapshot.val()[result].mainImage,"firstImage":snapshot.val()[result].firstImage,"secondImage":snapshot.val()[result].secondImage,"thirdImage":snapshot.val()[result].thirdImage,"fourthImage":snapshot.val()[result].fourthImage,"descriptionImage":snapshot.val()[result].descriptionImage,"approval":snapshot.val()[result].approval})
                        }
                        //"promotion":snapshot.val()[result].promotion,"id":snapshot.val()[result].id,"address":snapshot.val()[result].address,"name":snapshot.val()[result].name,"approval":snapshot.val()[result].approval,"category":snapshot.val()[result].category,"distance":nnewdistance,"mainImage":snapshot.val()[result].mainImage
                      }else{
                        if(snapshot.val()[result].category==this.selectedbutton){
                          if(snapshot.val()[result].reservationStart!=undefined){
                            this.storearray.push({"reservationStart":snapshot.val()[result].reservationStart,"category":snapshot.val()[result].category,"reservationEnd":snapshot.val()[result].reservationEnd,"reservationNumber":snapshot.val()[result].reservationNumber,"timeInterval":snapshot.val()[result].timeInterval,"promotion":snapshot.val()[result].promotion,"dis":Number(distance)*1000,"name":snapshot.val()[result].name,"id":snapshot.val()[result].id,"address":snapshot.val()[result].address,"mainImage":snapshot.val()[result].mainImage,"firstImage":snapshot.val()[result].firstImage,"secondImage":snapshot.val()[result].secondImage,"thirdImage":snapshot.val()[result].thirdImage,"fourthImage":snapshot.val()[result].fourthImage,"descriptionImage":snapshot.val()[result].descriptionImage,"approval":snapshot.val()[result].approval})
                          }else{
                            this.storearray.push({"promotion":snapshot.val()[result].promotion,"category":snapshot.val()[result].category,"dis":Number(distance)*1000,"name":snapshot.val()[result].name,"id":snapshot.val()[result].id,"address":snapshot.val()[result].address,"mainImage":snapshot.val()[result].mainImage,"firstImage":snapshot.val()[result].firstImage,"secondImage":snapshot.val()[result].secondImage,"thirdImage":snapshot.val()[result].thirdImage,"fourthImage":snapshot.val()[result].fourthImage,"descriptionImage":snapshot.val()[result].descriptionImage,"approval":snapshot.val()[result].approval})
                          }
                        }
                      }
                  
                     
               
                    }
                  }else{
                    console.log("no in this area");
                    console.log(this.storearray);
                  }
               
                }
              
            }
            if(data.flag=="station"){
          
              this.matchedStation=data.stname+"역";
            }else{
              this.matchedStation=data.stname;
            }
           
          });
  
          console.log(this.calcCrow(this.lat,this.lng,data.x,data.y).toFixed(2))
  
        }
        
      });
    });
  }
   calcCrow(lat1, lon1, lat2, lon2) 
    {
      var lat1:any;
      var lat2:any;
      var R = 6371; // km
      var dLat = this.toRad(lat2-lat1);
      var dLon = this.toRad(lon2-lon1);
       lat1 = this.toRad(lat1);
       lat2 = this.toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
     toRad(Value) 
    {
        return Value * Math.PI / 180;
    }
    generateStore(flagCategory){

      if(flagCategory=="health"||flagCategory=="diet"||flagCategory=="theraphy"){
        this.scroll._scrollContent.nativeElement.scrollTo({ left: 500, top: 0, behavior: 'smooth' });
      }
      this.firedata.once('value').then((snapshot) =>{
        this.storearray=[];
        var value:any;
        for(var result in snapshot.val()){
         
          
          if(snapshot.val()[result].approval==true||snapshot.val()[result].approval=="true"){
            // if(this.superdistance>Number(distance)*1000){

            
              if(flagCategory!="All"){
                if(flagCategory=="keyword"){
                
                  this.storearray=this.storearrayfromkeyword;
                  // for(var i=0; i<this.storearrayfromkeyword.length; i++){
                  //   this.storearray=this.storearrayfromkeyword[i]
                  // }
                }else{
                  if(snapshot.val()[result].category==flagCategory){
                    var newdistance=this.calcCrow(snapshot.val()[result].lat,snapshot.val()[result].lng,this.x,this.y).toFixed(2);
               
                    var nnewdistance=Number(newdistance)*1000;
                    if(this.superdistance>nnewdistance){
                      this.storearray.push({"promotion":snapshot.val()[result].promotion,"id":snapshot.val()[result].id,"address":snapshot.val()[result].address,"name":snapshot.val()[result].name,"approval":snapshot.val()[result].approval,"category":snapshot.val()[result].category,"distance":nnewdistance,"mainImage":snapshot.val()[result].mainImage})
                    }
                    
                  }
                }

              
               
              }else{
                var newdistance=this.calcCrow(snapshot.val()[result].lat,snapshot.val()[result].lng,this.x,this.y).toFixed(2);
                var nnewdistance=Number(newdistance);
                if(this.superdistance>nnewdistance){
                  this.storearray.push({"promotion":snapshot.val()[result].promotion,"id":snapshot.val()[result].id,"address":snapshot.val()[result].address,"name":snapshot.val()[result].name,"approval":snapshot.val()[result].approval,"category":snapshot.val()[result].category,"distance":nnewdistance,"mainImage":snapshot.val()[result].mainImage})
                }

              }
               
             
            // }
            }
          }
          
          if(this.storearray.length==0){
            this.storemention="현재 주변의 정보를 준비하지 못했어요 ㅜㅠ"
          }

          
      
  console.log(this.storearray);
  var sortingField = "distance";

  this.storearray.sort(function(a,b) { // 오름차순
    // return (a[sortingField] === b[sortingField])? 0 : a[sortingField]? -1 : 1;
    var x = a[sortingField]; var y = b[sortingField];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));

});
  console.log(this.storearray);
  var sortingField = "promotion";

  this.storearray.sort(function(a,b) { // 오름차순
    // return (a[sortingField] === b[sortingField])? 0 : a[sortingField]? -1 : 1;

    var x = a[sortingField]; 
    var y = b[sortingField];
    return (x === y)? 0 : x? -1 : 1;
});
        
      });
         if(this.loading!=null){
      this.loading.dismiss();
    }
    }
  constructor(viewCtrl:ViewController,private device: Device,private uniqueDeviceID: UniqueDeviceID,private screenOrientation: ScreenOrientation,public menuCtrl: MenuController,public platform:Platform,public alertCtrl: AlertController,public navParams: NavParams,public load:LoadingController,public geo:Geolocation,public _kakaoCordovaSDK: KakaoCordovaSDK,public navCtrl: NavController) {
  
    this.viewCtrl=viewCtrl;
    this.category3=this.navParams.get("category");

    this.logined=this.navParams.get("logined");
    this.nick=this.navParams.get("nick");
    this.x=this.navParams.get("x");
    this.y=this.navParams.get("y");
    this.stname=this.navParams.get("stname");
    this.categoryflag=this.navParams.get("flag");

    this.storearrayfromkeyword=this.navParams.get("storearray");

    this.userId=this.navParams.get("userId");
    this.selectedbutton=this.category3;
    this.location=this.navParams.get("location");
    this.loading = this.load.create({
    content: `Loading..`,
    });
   
    this.loading.present();
    
   
  


    this.rootdata.ref().child("distance").on('value',(snap)=>{

      this.superdistance=snap.val().value;
    })
    var photo="";
    var name="";
    var id="";
    
    photo =localStorage.getItem("photo");
    name =localStorage.getItem("name");
    id =localStorage.getItem("id");

    console.log("this is basic")
    console.log(photo);
    console.log(name);
    console.log(id);



//         /*
        
//         925391539
// main.js:176 정긍정
// main.js:177 https://k.kakaocdn.net/dn/yBGEM/btqo9Jhcla5/nxAiHGASvr8gI8Mx0muCHK/profile_110x110c.jpg
// main.js:178 true
// */
// if(photo!=null){
//   if(photo.length==9){
//     // this.logined="true";
//     // this.id="925391539";
//     // this.userUid="925391539"

//     // this.name="마스터이름";
//     // this.imageUrl="https://k.kakaocdn.net/dn/yBGEM/btqo9Jhcla5/nxAiHGASvr8gI8Mx0muCHK/profile_110x110c.jpg"
//     // localStorage.setItem("photo",this.imageUrl);
//     //     localStorage.setItem("name",this.name);
//     //     localStorage.setItem("id",this.userUid);
//   }else{

//     console.log("showing kakao");
//     this.imageUrl=photo;
//     this.id=id;
//     this.name=name;
//     this.logined="true";
//   }
// }else{
//   this.logined="true";
//   this.id="998621032";
//   this.userUid="998621032"

//   this.name="마스터이름";
//   this.imageUrl="https://k.kakaocdn.net/dn/yBGEM/btqo9Jhcla5/nxAiHGASvr8gI8Mx0muCHK/profile_110x110c.jpg"
//   // localStorage.setItem("photo",this.imageUrl);
//   // localStorage.setItem("name",this.name);
//   // localStorage.setItem("id",this.userUid);

// }
    
//     console.log("userid issss:"+this.userUid);
//     this.userUid=this.id;

    
    
//     if(this.userUid!=undefined){
//       this.firedata.once('value',(snapshot)=>{
//         this.storearray=[];
//         var value:any;
        
         
//         for(var result in snapshot.val()){
//           var requestor=snapshot.val()[result].requestedby
//           var flag=snapshot.val()[result].approval;
//           console.log("requestorㄲㄲ : "+requestor);
//           console.log(this.userUid);
//           console.log(flag);
//           if(requestor==this.userUid){
//             console.log("matched");
  
//             if(flag=="denied"){
//               this.flag="거절됨";
//               this.requestFlag="거절됨\n"+this.denyreason;
             
//               this.denyreason=snapshot.val()[result].reason;
//             }else if(flag=="true"||flag==true){
//               this.flag="승인됨";
//               this.requestFlag="승인됨 (클릭시 관리화면으로)";
//             }else if(flag==false||flag=="false"){
//               this.flag="승인대기중";
//               this.requestFlag="입점 승인 대기중"
             
//             }
            
//           }
  
//         }
  
//         console.log("flag condition"+this.flag);
//       });
//     }else{


// console.log('Device UUID is: ' + this.device.uuid);

// // this.uniqueDeviceID.get()
// // .then((uuid: any) => {
  
// //   this.userUid=uuid
// // } )
// // .catch((error: any) => alert(error));
     
//     }
    
    
  }
  logout(){
    localStorage.setItem("photo",undefined);
      localStorage.setItem("name",undefined);
      localStorage.setItem("id",undefined);
      this.logined="false";
    // this.kakao.logout().then(()=>{
    //   console.log("success logout");
      
    //   alert("로그아웃완료");
    // })
  }
  
  detail(store){

    this.closeflag="true";
    console.log("thissssssss user id is :"+this.userUid);
    console.log(store);
    this.navCtrl.push(StoredetailPage,{"logined":this.logined,"storeId":store.id,"nick":this.nick,"userId":this.userId}).then(()=>{
      this.navCtrl.getActive().onDidDismiss(data => {
       
    this.closeflag="false";
        console.log("dismiss");
      });
    })
    
  }
  getSession(){

    this._kakaoCordovaSDK.getAccessToken().then((res) => {
      console.log(res);
    }
  );
  }
  
  
  // kakaoLogin(){
  //   let loginOptions = {};
  //   loginOptions['authTypes'] = [
  //                                 AuthTypes.AuthTypeTalk, 
  //                                 AuthTypes.AuthTypeStory,
  //                                 AuthTypes.AuthTypeAccount
  //                               ];
    
  //   this._kakaoCordovaSDK.login(loginOptions).then((res) => {
  //     console.log("done");
  //       console.log(res);
  //       console.log(res.id);
  //       alert(res.id);
  //       //res.id 를 키 값으로 사용해서 유저 구분 가능할듯? 
  //       //대체 왜 이메일은 못받지??? ㅜㅠㅜㅠㅜㅜㅜ

  //       this._kakaoCordovaSDK
  //     .requestMe()
  //     .then(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //       }
  //     )
  //     .catch(err => {
  //     });
  //     }
  //   ).catch((e)=>{
  //     alert(e);
  //     console.log("error");
  //     console.log(e);
  //   })
  // }

}

