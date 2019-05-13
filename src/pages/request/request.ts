import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController,ModalController, LoadingController,NavParams } from 'ionic-angular';
import {Store} from './../../models/store';
import firebase from 'firebase';
import { normalizeURL } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { CameraselectPage } from '../cameraselect/cameraselect';
import { Cameraselect2Page } from '../cameraselect2/cameraselect2';
/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var naver: any;
 
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  inputcount:number=0;
  public anArray:any=[];
  designarray=[];
  selectedbutton:any="hair"
  countdesigner;number=0;
  count:number=0;
  storeKey:any;
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
  type:any;
  
  designerurl:string="none";
  designerurl1:string="none";
  designerurl2:string="none";
  designerurl3:string="none";
  designerurl4:string="none";
  designerurl5:string="none";
  designerurl6:string="none";
  designerurl7:string="none";
  designerurl8:string="none";
  designerurl9:string="none";
  designerurl10:string="none";
  designerurl11:string="none";
  designerurl12:string="none";
  designerurl13:string="none";
  designerurl14:string="none";
  designerurl15:string="none";
  designerurl16:string="none";
  designerurl17:string="none";
  designerurl18:string="none";
  designerurl19:string="none";

  designa=[];

  keyarray=[];
  firedata = firebase.database().ref('store');
  store={} as Store
  public picdata:any;
  public mypicref:any;
  regnumber:any;
  emergencytel:any;
  representitive:any;
  newkey:any;
  name:string;
  id:string;
  newRef:any;
  address:string;
  description:string;
  descriptionurl:string;
  keywords:string;
  picurl:any;
  lat:string;
  lng:string;
  mainImage:string
  tel:string;
  nowtime:string;
  userUid:string;
  base64Image:string;
  firsturl:string;
  counting=0;
  secondurl:string;
  thirdurl:string;
  fourthurl:string;
  descriptionphoto:string;

  facility:string;
  firstdata:any;
  seconddata:any;
  thirddata:any;

  fourthdata:any;

  fifthurl:string;
  fifthdata:any;
  sixthurl:string;
  sixthdata:any;
  seventhurl:string;
  seventhdata:any;

  eighthurl:string;
  eighthdata:any;

  ninethurl:string;
  ninethdata:any;

  tenthurl:string;
  tenthdata:any;

  eleventhurl:string;
  eleventhdata:any;

  twelvethurl:string;
  twelvethdata:any;
  viewCtrl:any;
  descriptiondata:any;
  constructor(viewCtrl:ViewController,public modal:ModalController,public view:ViewController,public camera:Camera,public loading:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    var today = new Date();
    this.viewCtrl=viewCtrl;
    today.setHours(today.getHours()+9);
    this.anArray.push({'value':'','price':'','time':'','event':''});
    this.mypicref=firebase.storage().ref('/');
    
    this.count=0;
    this.countdesigner=0;
    this.newRef = this.firedata.push();
    // this.storeKey=this.firedata.push(this.store).key;
 
    this.userUid=this.navParams.get("id");
   
    console.log("user uid is : "+this.userUid);
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
    var second=thisday.getSeconds();
    console.log(thisday)
    console.log(today)
    console.log(month+1);
    console.log(date);
    console.log((hour)+"시");
    console.log(minute);
    console.log(fullyear)


     this.nowtime = ""+(month+1)+date+(hour)+minute+second;
  }
  gotoback(){
    this.viewCtrl.dismiss();
  }
  addInput(){
    console.log(this.anArray);
    if(this.anArray[0].value==''){
    }else{
      this.anArray.push({'value':'','price':'',"time":'','event':''});
    }
    
    
  }
  requesting(){
   
    // console.log(this.firstdata);
    // console.log(this.picdata);
   

    console.log("gogogo");
/**var newRef = this.firedata.child(this.firstvalue).child(this.value.title).push();
      var newItem = 
        {"question":this.question,"answer":this.answer,"key":newRef.key,"favorite":"no","questionPic":this.questionPic,"answerPic":this.answerPic,"no":count-1};
    newRef.set(newItem); */
    console.log(this.designarray);
    console.log(this.picurl);
    this.store.approval=false;
    this.store.name=this.name;
    this.store.address=this.address;
    this.store.tel=this.tel;
   
    this.store.description=this.description;
    this.store.requestedDate=this.nowtime
  
    this.store.designarray=this.designarray;
    console.log("ogogogog")
    console.log(this.designarray);
    this.store.category="All";
    var items=[];
    this.store.requestedby=this.userUid;
    this.store.arrayPrice=this.anArray;
    console.log(this.store);
    naver.maps.Service.geocode({
      address: this.address
  }, (status,response)=> {
      if (status !== naver.maps.Service.Status.OK) {
          return alert('올바른 주소를 입력해주세요!');
      }
 
      var result = response.result; // 검색 결과의 컨테이너
     console.log("result is : "+result);
     console.log(result);
          items = result.items; // 검색 결과의 배열
          console.log("printing...")
          console.log(result);
          if(items.length==0){
            console.log("65sss");
            this.store.lat="37.541";
            console.log("this isssssss 57")
            this.store.lng="126.986";
          }else{
            console.log(items[0]);
            console.log(items[0].point.x);
            console.log(items[0].point.y);
            console.log("65sss");
            this.store.lat=items[0].point.y;
            console.log("this isssssss 57")
            this.store.lng=items[0].point.x;
          }
        
          // this.storeKey=this.firedata.push(this.store).key;
         
          // console.log(this.firedata.push(this.store).key)
         
          // if(this.name==undefined){
          //   alert("가게명을 입력해주세요");
          //   return;
          // }
          // if(this.description==undefined){
          //   alert("설명을 입력해주세요");
          //   return;
          // }
          // if(this.address==undefined){
          //   alert("주소를 입력해주세요");
          //   return;
          // }
          
          // if(this.tel==undefined){
          //   alert("연락처 입력해주세요");
          //   return;
          // }
          // if(this.emergencytel==undefined){
          //   alert("비상 연락처 입력해주세요");
          //   return;
          // }
          // if(this.regnumber==undefined){
          //   alert("사업자 번호를 입력해주세요");
          //   return;
          // }
          // if(this.representitive==undefined){
          //   alert("대표자명을 입력해주세요");
          //   return;
          // }
          // if(this.picdata==undefined){
          //   this.picurl="none";
          //   alert("메인 이미지를 입력해주세요")
          //   return;
          // }
         
          
          this.store.regnumber=this.regnumber;
          this.store.representitive=this.representitive;
          this.store.emergencytel=this.emergencytel;
          this.storeKey=this.newRef.key;
          this.store.id=this.newRef.key;


       

          // if(this.picurl==undefined){
          //   this.picurl="none";
          // }
          if(this.picurl==undefined){
            this.picurl="none";
          }
        if(this.firsturl==undefined){
          this.firsturl="none";
        }
        if(this.secondurl==undefined){
          this.secondurl="none";
        }
        if(this.thirdurl==undefined){
          this.thirdurl="none";
        }
        if(this.fourthurl==undefined){
          this.fourthurl="none";
        }
        if(this.fifthurl==undefined){
          this.fifthurl="none";
        }
        if(this.sixthurl==undefined){
          this.sixthurl="none";
        }
        if(this.seventhurl==undefined){
          this.seventhurl="none";
        }
        if(this.eighthurl==undefined){
          this.eighthurl="none";
        }
        if(this.ninethurl==undefined){
          this.ninethurl="none";
        }
        if(this.tenthurl==undefined){
          this.tenthurl="none";
        }
        if(this.eleventhurl==undefined){
          this.eleventhurl="none";
        }
        if(this.twelvethurl==undefined){
          this.twelvethurl="none";
        }
        if(this.keywords==undefined){
          this.keywords="none";
        }
        if(this.type==undefined){
          this.type="none";
        }

      

        if(this.designerurl==undefined){
          this.designerurl="none";
        }
        if(this.designerurl1==undefined){
          this.designerurl1="none";
        }
        if(this.designerurl2==undefined){
          this.designerurl2="none";
        }
        if(this.designerurl3==undefined){
          this.designerurl3="none";
        }
        if(this.designerurl4==undefined){
          this.designerurl4="none";
        }
        if(this.designerurl5==undefined){
          this.designerurl5="none";
        }
        if(this.designerurl6==undefined){
          this.designerurl6="none";
        }
        if(this.designerurl7==undefined){
          this.designerurl7="none";
        }
        if(this.designerurl8==undefined){
          this.designerurl8="none";
        }
        if(this.designerurl9==undefined){
          this.designerurl9="none";
        }
        if(this.designerurl10==undefined){
          this.designerurl10="none";
        }
        if(this.designerurl11==undefined){
          this.designerurl11="none";
        }
        if(this.designerurl12==undefined){
          this.designerurl12="none";
        }
        if(this.designerurl13==undefined){
          this.designerurl13="none";
        }
        if(this.designerurl14==undefined){
          this.designerurl14="none";
        }
        if(this.designerurl15==undefined){
          this.designerurl15="none";
        }
        if(this.designerurl16==undefined){
          this.designerurl16="none";
        }
        if(this.designerurl17==undefined){
          this.designerurl17="none";
        }
        if(this.designerurl18==undefined){
          this.designerurl18="none";
        }
        if(this.designerurl19==undefined){
          this.designerurl19="none";
        }
        if(this.newkey==undefined){
          this.newkey="none";
        }
        if(this.designername==undefined){
          this.designername="none";
        }
        if(this.designername1==undefined){
          this.designername1="none";
        }
        if(this.designername2==undefined){
          this.designername2="none";
        }
        if(this.designername3==undefined){
          this.designername3="none";
        }
        if(this.designername4==undefined){
          this.designername4="none";
        }
        if(this.designername5==undefined){
          this.designername5="none";
        }
        if(this.designername6==undefined){
          this.designername6="none";
        }
        if(this.designername7==undefined){
          this.designername7="none";
        }
        if(this.designername8==undefined){
          this.designername8="none";
        }
        if(this.designername9==undefined){
          this.designername9="none";
        }
        if(this.designername10==undefined){
          this.designername10="none";
        }
        if(this.designername11==undefined){
          this.designername11="none";
        }
        if(this.designername12==undefined){
          this.designername12="none";
        }
        if(this.designername13==undefined){
          this.designername13="none";
        }
        if(this.designername14==undefined){
          this.designername14="none";
        }
        if(this.designername15==undefined){
          this.designername15="none";
        }
        if(this.designername16==undefined){
          this.designername16="none";
        }
        if(this.designername17==undefined){
          this.designername17="none";
        }
        if(this.designername18==undefined){
          this.designername18="none";
        }
        if(this.designername19==undefined){
          this.designername19="none";
        }
        

        console.log("pic url ");
        console.log(this.picurl);

        console.log(this.firsturl);
        console.log(this.secondurl);
        console.log(this.thirdurl);
        console.log(this.fourthurl);
        console.log(this.fifthurl);
        console.log(this.sixthurl);
        console.log(this.seventhurl);
           
        console.log(this.keywords);
   
        console.log(this.designerurl5);
          console.log("aaaaaaaaaaaaaaaaaaaaaaa")
         this.store.mainImage=this.picurl;
         this.store.firstImage=this.firsturl;
         this.store.secondImage=this.secondurl;
         this.store.thirdImage=this.thirdurl;
         this.store.fourthImage=this.fourthurl;
         this.store.fifthImage=this.fifthurl;
         this.store.sixthImage=this.sixthurl;
         this.store.seventhImage=this.seventhurl;
         this.store.eighthImage=this.eighthurl;
         this.store.ninethImage=this.ninethurl;
         this.store.tenthImage=this.tenthurl;
         this.store.eleventhImage=this.eleventhurl;
         this.store.twelvethImage=this.twelvethurl;

         this.store.keywords=this.newkey;
         this.store.facility=this.facility;

         this.store.type=this.type;

         this.store.designerImage=this.designerurl;
         this.store.designerImage1=this.designerurl1;
         this.store.designerImage2=this.designerurl2;
         this.store.designerImage3=this.designerurl3;
         this.store.designerImage4=this.designerurl4;
         this.store.designerImage5=this.designerurl5;
         this.store.designerImage6=this.designerurl6;
         this.store.designerImage7=this.designerurl7;
         this.store.designerImage8=this.designerurl8;
         this.store.designerImage9=this.designerurl9;
         this.store.designerImage10=this.designerurl10;
         this.store.designerImage11=this.designerurl11;
         this.store.designerImage12=this.designerurl12;
         this.store.designerImage13=this.designerurl13;
         this.store.designerImage14=this.designerurl14;
         this.store.designerImage15=this.designerurl15;
         this.store.designerImage16=this.designerurl16;
         this.store.designerImage17=this.designerurl17;
         this.store.designerImage18=this.designerurl18;
         this.store.designerImage19=this.designerurl19;

         this.store.designername=this.designername;
         this.store.designername1=this.designername1;
         this.store.designername2=this.designername2;
         this.store.designername3=this.designername3;
         this.store.designername4=this.designername4;
         this.store.designername5=this.designername5;
         this.store.designername6=this.designername6;
         this.store.designername7=this.designername7;
         this.store.designername8=this.designername8;
         this.store.designername9=this.designername9;
         this.store.designername10=this.designername10;
         this.store.designername11=this.designername11;
         this.store.designername12=this.designername12;
         this.store.designername13=this.designername13;
         this.store.designername14=this.designername14;
         this.store.designername15=this.designername15;
         this.store.designername16=this.designername16;
         this.store.designername17=this.designername17;
         this.store.designername18=this.designername18;
         this.store.designername19=this.designername19;
         this.store.category=this.selectedbutton;
         console.log("done")
         console.log(this.newRef);
         var a ={    
             "approval":false,"address":this.store.address,"requestedDate":this.store.requestedDate,"tel":this.store.tel,"emergencytel":this.store.emergencytel,"representitive":this.store.representitive,"regnumber":this.store.regnumber,"type":this.store.type,"description":this.store.description,"facility":this.store.facility,
         "designarray":this.store.designarray,
         "category":this.store.category,"requestedby":this.userUid,"arrayPrice":this.store.arrayPrice,"lat":this.store.lat,"lng":this.store.lng,"id":this.store.id,
         "mainImage":this.store.mainImage,
         "firstImage":this.store.firstImage,"secondImage":this.store.secondImage,"thirdImage":this.store.thirdImage,"fourthImage":this.store.fourthImage,"fifthImage":this.store.fifthImage,"sixthImage":this.store.sixthImage,"seventhImage":this.store.seventhImage,"eighthImage":this.store.eighthImage,"ninethImage":this.store.ninethImage,"tenthImage":this.store.tenthImage,"eleventhImage":this.store.eleventhImage,"twelvethImage":this.store.twelvethImage,
         "designerImage":this.store.designerImage,
         "designerImage1":this.store.designerImage1,"designerImage2":this.store.designerImage2,"designerImage3":this.store.designerImage3,"designerImage4":this.store.designerImage4,"designerImage5":this.store.designerImage5,"designerImage6":this.store.designerImage6,"designerImage7":this.store.designerImage7,
         "designerImage8":this.store.designerImage8,"designerImage9":this.store.designerImage9,"designerImage10":this.store.designerImage10,"designerImage11":this.store.designerImage11,"designerImage12":this.store.designerImage12,"designerImage13":this.store.designerImage13,"designerImage14":this.store.designerImage14,
         "designerImage15":this.store.designerImage15,"designerImage16":this.store.designerImage16,"designerImage17":this.store.designerImage17,"designerImage18":this.store.designerImage18,"designerImage19":this.store.designerImage19,
         "designername":this.store.designername,"designername1":this.store.designername1,
         "designername2":this.store.designername2,"designername3":this.store.designername3,"designername4":this.store.designername4,"designername5":this.store.designername5,"designername6":this.store.designername6,"designername7":this.store.designername7,"designername8":this.store.designername8,
         "designername9":this.store.designername9,"keywords":this.store.keywords
         ,"designername10":this.store.designername10,"designername11":this.store.designername11,
         "designername12":this.store.designername12,"designername13":this.store.designername13,"designername14":this.store.designername14,"designername15":this.store.designername15,"designername16":this.store.designername16,"designername17":this.store.designername17,"designername18":this.store.designername18,
        "designername19":this.store.designername19
    
        }

         console.log("logging...");
         console.log(a);
       

         /**
          * 
          * "approval":false,"name":"각가","address":"논현로 10길","tel":"333","description":"나난","requestedDate":"4303139",
          * "designarray":[{"url":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2Fdesign3?alt=media&token=3ac015fa-07fd-4e39-9859-4fd3cd5d8a5a"},
          * {"url":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2Fdesign2?alt=media&token=da86791e-3f10-40a5-9a7b-714167b8fe7b"},{"url":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2Fdesign1?alt=media&token=de050813-db7e-4279-b862-e3c1958d05b0"},
          * {"url":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2Fdesign4?alt=media&token=cfec2e4f-c556-4126-974e-069c796ecd57"},{"url":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2Fdesign5?alt=media&token=b579470a-625d-4ad7-a07b-f80b0b043eae"}],
          * "category":"nail","requestedby":"998621032","arrayPrice":[{"value":"두두","price":"20","time":"5","event":"10"}],"lat":37.4744496,"lng":127.0498475,"regnumber":"444","representitive":"바비","emergencytel":"3222","id":"-LbTfLM4dOztWalz-PV2",
          * "mainImage":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2FmainImage?alt=media&token=82bc95a5-b676-4667-a9b8-dc37ea4c509a",
          * "firstImage":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2FfirstImage?alt=media&token=6a9c8fb5-f6e1-4aab-a355-4d7f35b5377c",
          * "secondImage":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2FsecondImage?alt=media&token=6791eff1-e601-454c-80da-001e89e75bd1",
          * "thirdImage":"none","fourthImage":"none","fifthImage":"none","sixthImage":"none","seventhImage":"none","eighthImage":"none","ninethImage":"none","tenthImage":"none",
          * "eleventhImage":"none","twelvethImage":"none","facility":"다다","designerImage":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2Fdesigner?alt=media&token=fc35933d-105c-4ef4-8817-9961b43c44e2",
          * "designerImage1":"https://firebasestorage.googleapis.com/v0/b/hamm-93bfc.appspot.com/o/-LbTfLM4dOztWalz-PV2%2Fdesigner1?alt=media&token=9ce421eb-e4e2-4462-beec-bcdc4356ff71",
          * "designerImage2":"none","designerImage3":"none","designerImage4":"none","designerImage5":"none","designerImage6":"none","designerImage7":"none","designerImage8":"none",
          * "designerImage9":"none","designerImage10":"none","designerImage11":"none","designerImage12":"none","designerImage13":"none","designerImage14":"none","designerImage15":"none",
          * "designerImage16":"none","designerImage17":"none","designerImage18":"none","designerImage19":"none","designername":"다다다","designername1":"댜댜댜","designername2":"none",
          * "designername3":"none","designername4":"none","designername5":"none","designername6":"none","designername7":"none","designername8":"none","designername9":"none"
          * 
          */
         console.log("dddddaoss");
         console.log(this.store.designername10);
         console.log(this.store.designername11);
           console.log(this.store.designername12);
           console.log(this.store.designername13);
             console.log(this.store.designername14);
         console.log(this.store.designername15);
         console.log(this.store.designername19);
         console.log("sdfsf")
         this.newRef.set({
          "approval":false,"address":this.store.address,"requestedDate":this.store.requestedDate,"tel":this.store.tel,"emergencytel":this.store.emergencytel,"representitive":this.store.representitive,"regnumber":this.store.regnumber,"type":this.store.type,"name":this.store.name,"description":this.store.description,"facility":this.store.facility,
          "designarray":this.store.designarray,
          "category":this.store.category,"requestedby":this.userUid,"arrayPrice":this.store.arrayPrice,"lat":this.store.lat,"lng":this.store.lng,"id":this.store.id,
          "mainImage":this.store.mainImage,
          "firstImage":this.store.firstImage,"secondImage":this.store.secondImage,"thirdImage":this.store.thirdImage,"fourthImage":this.store.fourthImage,"fifthImage":this.store.fifthImage,"sixthImage":this.store.sixthImage,"seventhImage":this.store.seventhImage,"eighthImage":this.store.eighthImage,"ninethImage":this.store.ninethImage,"tenthImage":this.store.tenthImage,"eleventhImage":this.store.eleventhImage,"twelvethImage":this.store.twelvethImage,
          "designerImage":this.store.designerImage,
          "designerImage1":this.store.designerImage1,"designerImage2":this.store.designerImage2,"designerImage3":this.store.designerImage3,"designerImage4":this.store.designerImage4,"designerImage5":this.store.designerImage5,"designerImage6":this.store.designerImage6,"designerImage7":this.store.designerImage7,
          "designerImage8":this.store.designerImage8,"designerImage9":this.store.designerImage9,"designerImage10":this.store.designerImage10,"designerImage11":this.store.designerImage11,"designerImage12":this.store.designerImage12,"designerImage13":this.store.designerImage13,"designerImage14":this.store.designerImage14,
          "designerImage15":this.store.designerImage15,"designerImage16":this.store.designerImage16,"designerImage17":this.store.designerImage17,"designerImage18":this.store.designerImage18,"designerImage19":this.store.designerImage19,
          "designername":this.store.designername,"designername1":this.store.designername1,
          "designername2":this.store.designername2,"designername3":this.store.designername3,"designername4":this.store.designername4,"designername5":this.store.designername5,"designername6":this.store.designername6,"designername7":this.store.designername7,"designername8":this.store.designername8,
          "designername9":this.store.designername9,"keywords":this.store.keywords
          ,"designername10":this.store.designername10,"designername11":this.store.designername11,
          "designername12":this.store.designername12,"designername13":this.store.designername13,"designername14":this.store.designername14,"designername15":this.store.designername15,"designername16":this.store.designername16,"designername17":this.store.designername17,"designername18":this.store.designername18,
         "designername19":this.store.designername19
  }).then((e)=>{
           console.log(e);
         }).catch((e)=>{
           console.log(e);
         })
         console.log("done2222")
 
         setTimeout(()=>{
           alert('신청이 완료되었습니다.')
           this.view.dismiss();
         },500)
        console.log("photo upload end");






          // if(this.picdata!=undefined){
          //   console.log("main upload start");
          //     // this.upload("main",this.picdata);
             
          // }
          // if(this.firstdata!=undefined){
          //   console.log("first upload start");
          //   // this.upload("first",this.firstdata);

          //   this.mypicref.child(this.storeKey).child("firstImage")
          //   .putString(this.firstdata,'base64',{contentType:'image/jpeg'})
          //   .then((savepic)=>{
          //     console.log("saving pic for first");
          //     console.log(savepic);
          //     this.mypicref.child(this.store.id).child("firstImage").getDownloadURL().then((url)=> {
          //       console.log("first new url is : "+url);

              
          //       // this.generateagain();
          //     })
          //   }).catch((e)=>{
          //     console.log("ecome");
          //     console.log(e);
          //   })

          // }
          // if(this.seconddata!=undefined){
          //   console.log("second upload start");
          //   // this.upload("second",this.seconddata);
          // }
          // if(this.thirddata!=undefined){
          //   console.log("4444");
          //   // this.upload("third",this.thirddata);
          // }
          // if(this.fourthdata!=undefined){
          //   console.log("5555");
          //   // this.upload("fourth",this.fourthdata);
          // }
          // if(this.fifthdata!=undefined){
          //   console.log("5555");
          //   // this.upload("fifth",this.fifthdata);
          // }
          // if(this.sixthdata!=undefined){
          //   console.log("5555");
          //   // this.upload("sixth",this.sixthdata);
          // }
          // if(this.seventhdata!=undefined){
          //   console.log("5555");
          //   // this.upload("seventh",this.seventhdata);
          // }
          // if(this.descriptiondata!=undefined){
          //   console.log("66666");
          //   // this.upload("description",this.descriptiondata);
          // }

          console.log("upload finished done");
          
       
    //     

 })
  
   
  }
  keywordchanged(){
    // console.log(this.keyword);
    // console.log(this.newkey);
    this.newkey="";
    console.log(this.number);
    console.log(this.keywords.split(","))
    this.keyarray=this.keywords.split(",");
    for(var i=0;i<this.keyarray.length; i++){

      if(i==this.keyarray.length-1){
        this.newkey+=this.keyarray[i];
      }else{
        this.newkey+=this.keyarray[i]+","
      }
    }
    console.log(this.newkey);
   
  }
  category(value){
    this.selectedbutton=value;
  }
  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI,index){
    console.log("key and index is : "+this.newRef.key);
      let storageRef = firebase.storage().ref();
      var result="design"+(index+1);
      console.log("result is : "+result);
          var a = this.mypicref.child(this.newRef.key).child(result)
      this.encodeImageUri(imageURI, (image64)=>{
        console.log("image64 converted done");
        console.log(image64);

        this.designa.push({"url":image64})
       
        a.putString(image64, 'data_url',{contentType:'image/jpeg'})
        .then(snapshot => {
          console.log(snapshot);
          this.mypicref.child(this.newRef.key).child(result).getDownloadURL().then((url)=>{
          this.designarray.push({"url":url});
            console.log("download url is : "+url);
          }).catch((e)=>{
            console.log('eeeee');
            console.log(e);
          })
         
        }).catch((e)=>{
          window.alert(e);
          console.log(e);
        })
      })
    // if(index==2){
    //   return new Promise<any>((resolve, reject) => {
    //     let storageRef = firebase.storage().ref();
       
   
    //     this.encodeImageUri(imageURI, function(image64){
    //       a.putString(image64, 'data_url')
    //       .then(snapshot => {
    //         console.log(snapshot.downloadURL);
    //         console.log("upload done");
    //         resolve(snapshot.downloadURL)
    //       }, err => {
    //         reject(err);
    //       })
    //     })
    //   })
    // }
   
  }
  uploadtoweb(v,pic){
    console.log(v+"uploadtoweb newRefis :"+this.newRef.key);
    this.mypicref.child(this.newRef.key).child(v)
    .putString(pic,'base64',{contentType:'image/jpeg'})
    .then((savepic)=>{
      console.log("saving pic for main"+v);
      console.log(savepic);
      this.mypicref.child(this.newRef.key).child(v).getDownloadURL().then((url)=> {
        console.log("main new url is : "+url);
        if(v=="mainImage"){
          this.picurl=url;
        }
        if(v=="firstImage"){
          this.firsturl=url;
        }
        if(v=="secondImage"){
          this.secondurl=url;
        }
        if(v=="thirdImage"){
          this.thirdurl=url;
        }
        if(v=="fourthImage"){
          this.fourthurl=url;
        }
        if(v=="fifthImage"){
          this.fifthurl=url;
        }
        if(v=="sixthImage"){
          this.sixthurl=url;
        }
        if(v=="seventhImage"){
          this.seventhurl=url;
        }
        if(v=="eighthImage"){
          this.eighthurl=url;
        }
        if(v=="ninethImage"){
          this.ninethurl=url;
        }
        if(v=="tenthImage"){
          this.tenthurl=url;
        }
        if(v=="eleventhImage"){
          this.eleventhurl=url;
        }
        if(v=="twelvethImage"){
          this.twelvethurl=url;
        }

       
        if(v=="designer"){
          this.designerurl=url;
        }
        if(v=="designer1"){
          this.designerurl1=url;
        }
        if(v=="designer2"){
          this.designerurl2=url;
        }
        if(v=="designer3"){
          this.designerurl3=url;
        }
        if(v=="designer4"){
          this.designerurl4=url;
        }
        if(v=="designer5"){
          this.designerurl5=url;
        }
        if(v=="designer6"){
          this.designerurl6=url;
        }
        if(v=="designer7"){
          this.designerurl7=url;
        }
        if(v=="designer8"){
          this.designerurl8=url;
        }
        if(v=="designer9"){
          this.designerurl9=url;
        }
        if(v=="designer10"){
          this.designerurl10=url;
        }
        if(v=="designer11"){
          this.designerurl11=url;
        }
        if(v=="designer12"){
          this.designerurl12=url;
        }
        if(v=="designer13"){
          this.designerurl13=url;
        }
        if(v=="designer14"){
          this.designerurl14=url;
        }
        if(v=="designer15"){
          this.designerurl15=url;
        }
        if(v=="designer16"){
          this.designerurl16=url;
        }
        if(v=="designer17"){
          this.designerurl17=url;
        }
        if(v=="designer18"){
          this.designerurl18=url;
        }
        if(v=="designer19"){
          this.designerurl19=url;
        }


      })
    }).catch((e)=>{
      console.log("ecome");
      console.log(e);
    })
  }
  uploadImageToFirebase(image,index){
    console.log("upload iamge to firebase");
    console.log(image);
    image = normalizeURL(image);
    console.log(image);
    //uploads img to firebase storage
    this.uploadImage(image,index)
    // .then(photoURL => {
  
    // console.log("photo url "+photoURL);
    // }).catch((e)=>{
    //   console.log("err");
    //   console.log(e);
    // })
  }

  takePhotoForMulti(){
    console.log("multi shot")
    var value="";
    let modal = this.modal.create(Cameraselect2Page);
    modal.onDidDismiss(imagedata => {
      console.log("image data is : ");
      if(imagedata!=undefined){
        console.log(imagedata);
        console.log("flag is : ");
        console.log(imagedata.flag);
        console.log("///");
        if(imagedata.flag=="multi"){
          console.log(imagedata.data);
          console.log(imagedata.data.length);
  
        if(imagedata.data!=undefined){
          console.log(this.picdata);
         
          console.log("data to input is  picccccc");
          for(var i=0; i<imagedata.data.length; i++){
            console.log("uploading..."+i);
            this.picdata=imagedata.data[i];
            this.uploadImageToFirebase(imagedata.data[i],i);
  
            // this.uploadImage(this.picdata,i);
          }
         
        }
      }
    
    }
  });
  modal.present();
  
  }
  takePhoto(flag){

            
    var value="";
    let modal = this.modal.create(CameraselectPage);
    modal.onDidDismiss(imagedata => {
      console.log("image data is : ");
      console.log(imagedata);
      console.log("flag is : ");
      console.log(imagedata.flag);
      console.log("///");
      if(imagedata.flag=="multi"){
        console.log(imagedata.data);
        console.log(imagedata.data.length);

      if(imagedata.data!=undefined){
        console.log(this.picdata);
       
        console.log("data to input is  picccccc");
        for(var i=0; i<imagedata.data.length; i++){
          console.log("uploading..."+i);
          this.picdata=imagedata.data[i];
          this.uploadImageToFirebase(imagedata.data[i],i);

          // this.uploadImage(this.picdata,i);
        }
       
      }

      }
      if(imagedata.flag=="single"){

        console.log("single come!!!");
       
        console.log(imagedata.data);
        if(imagedata.data!=undefined){
          this.picdata=imagedata.data;
          this.base64Image = "data:image/jpeg;base64," + imagedata.data;
          if(flag=="main"){
            value="mainImage";
           
            this.picurl=this.base64Image;

           }
          if(flag=="first"){
            value="firstImage";
            this.firsturl=this.base64Image;
          }
          if(flag=="second"){
            value="secondImage";
            this.secondurl=this.base64Image;
          }
          if(flag=="third"){
            value="thirdImage";
            this.thirdurl=this.base64Image;
          }
          if(flag=="fourth"){
            this.fourthurl=this.base64Image;
            value="fourthImage";
          }

          if(flag=="fifth"){
            this.fifthurl=this.base64Image;
            value="fifthImage";
          }
          if(flag=="sixth"){
            this.sixthurl=this.base64Image;
            value="sixthImage";
          }
          if(flag=="seventh"){
            this.seventhurl=this.base64Image;
            value="seventhImage";
          }
          if(flag=="eighth"){
            this.eighthurl=this.base64Image;
            value="eighthImage";
          }

          if(flag=="nineth"){
            this.ninethurl=this.base64Image;
            value="ninethImage";
          }
          if(flag=="tenth"){
            this.tenthurl=this.base64Image;
            value="tenthImage";
          }
          if(flag=="eleventh"){
            this.eleventhurl=this.base64Image;
            value="eleventhImage";
          }
          if(flag=="twelveth"){
            this.twelvethurl=this.base64Image;
            value="twelvethImage";
          }
          if(flag=="designer"){
            if(this.countdesigner==0){
              this.designerurl=this.base64Image;
              value="designer";
            }
            if(this.countdesigner==1){
              this.designerurl1=this.base64Image;
              value="designer1";
            }
            if(this.countdesigner==2){
              this.designerurl2=this.base64Image;
              value="designer2";
            }
            if(this.countdesigner==3){
              this.designerurl3=this.base64Image;
              value="designer3";
            }
            if(this.countdesigner==4){
              this.designerurl4=this.base64Image;
              value="designer4";
            }
            if(this.countdesigner==5){
              this.designerurl5=this.base64Image;
              value="designer5";
            }
            if(this.countdesigner==6){
              this.designerurl6=this.base64Image;
              value="designer6";
            }
            if(this.countdesigner==7){
              this.designerurl7=this.base64Image;
              value="designer7";
            }
            if(this.countdesigner==8){
              this.designerurl8=this.base64Image;
              value="designer8";
            }
            if(this.countdesigner==9){
              this.designerurl9=this.base64Image;
              value="designer9";
            }
            if(this.countdesigner==10){
              this.designerurl10=this.base64Image;
              value="designer10";
            }
            if(this.countdesigner==11){
              this.designerurl11=this.base64Image;
              value="designer11";
            }
            if(this.countdesigner==12){
              this.designerurl12=this.base64Image;
              value="designer12";
            }
            if(this.countdesigner==13){
              this.designerurl13=this.base64Image;
              value="designer13";
            }
            if(this.countdesigner==14){
              this.designerurl14=this.base64Image;
              value="designer14";
            }
            if(this.countdesigner==15){
              this.designerurl15=this.base64Image;
              value="designer15";
            }
            if(this.countdesigner==16){
              this.designerurl16=this.base64Image;
              value="designer16";
            }
            if(this.countdesigner==17){
              this.designerurl17=this.base64Image;
              value="designer17";
            }
            if(this.countdesigner==18){
              this.designerurl18=this.base64Image;
              value="designer18";
            }
            if(this.countdesigner==19){
              this.designerurl19=this.base64Image;
              value="designer19";
            }

            this.countdesigner++;
            console.log("countdesigner is : "+this.countdesigner);
          }

          this.uploadtoweb(value,this.picdata);
        }
      }
    });
      modal.present();

  }
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

}
