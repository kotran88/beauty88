import { Component ,ViewChild} from '@angular/core';
import { IonicPage,DateTime,AlertController,ModalController, NavController,Navbar,ViewController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

import { normalizeURL } from 'ionic-angular';

import firebase from 'firebase';
import { CameraselectPage } from '../cameraselect/cameraselect';
import { DutyoffPage } from '../dutyoff/dutyoff';
import { empty } from 'rxjs/Observer';
import { Cameraselect2Page } from '../cameraselect2/cameraselect2';
import { Cameraselect3Page } from '../cameraselect3/cameraselect3';
import { OffanddeletePage } from '../offanddelete/offanddelete';
@Component({
  selector: 'page-management',
  templateUrl: 'management.html',
})
export class ManagementPage {


  matchedDay=[];
  reservationDes=[];
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

  dayofweek1:any;
  dayofweek2:any;
  dayofweek3:any;
  dayofweek4:any;
  dayofweek5:any;
  dayofweek6:any;
  dayofweek7:any;
  newmonth=0;
  flag:any=0;
  nowtime:any;
  selectDay:any;
  dayofweek:any;
  newRef:any;
  firstdate:any;
  seconddate:any;
  thirddate:any;
  fourthdate:any;
  fifthdate:any;
  sixthdate:any;
  seventhdate:any;
  @ViewChild(Navbar) navbar: Navbar;
  reservationfinal=[];
  allreservation=[];
  disabledreservation=[];
 
  selectedDesigner:any;
  dutylist=[];
  designerurl:string="";
  designerurl1:string="";
  designerurl2:string="";
  designerurl3:string="";
  designerurl4:string="";
  designerurl5:string="";
  designerurl6:string="";
  designerurl7:string="";
  
  dutySelected:any;

 
  designerurl8:string="";
  designerurl9:string="";
  designerurl10:string="";
  designerurl11:string="";
  designerurl12:string="";
  designerurl13:string="";
  designerurl14:string="";
  designerurl15:string="";
  designerurl16:string="";
  designerurl17:string="";
  designerurl18:string="";
  designerurl19:string="";

  designurl:string="none";
  designurl1:string="none";
  designurl2:string="none";
  designurl3:string="none";
  designurl4:string="none";
  designurl5:string="none";
  designurl6:string="none";
  designurl7:string="none";
  designurl8:string="none";
  designurl9:string="none";
  designurl10:string="none";
  designurl11:string="none";
  designurl12:string="none";
  designurl13:string="none";
  designurl14:string="none";
  designurl15:string="none";
  designurl16:string="none";
  designurl17:string="none";
  designurl18:string="none";
  designurl19:string="none";
  designurl20:string="none";
  designurl21:string="none";
  designurl22:string="none";
  designurl23:string="none";
  designurl24:string="none";
  designurl25:string="none";
  designurl26:string="none";
  designurl27:string="none";
  designurl28:string="none";
  designurl29:string="none";
  designurl30:string="none";
  designurl31:string="none";
  designurl32:string="none";
  designurl33:string="none";
  designurl34:string="none";
  designurl35:string="none";
  designurl36:string="none";
  designurl37:string="none";
  designurl38:string="none";
  designurl39:string="none";

  designImage:any;
  designImage1:any;
  designImage2:any;
  designImage3:any;
  designImage4:any;
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


  first:boolean=true;
  second:boolean=false;
  third:boolean=false;
  fourth:boolean=false;
  fifth:boolean=false;
  sixth:boolean=false;
  seventh:boolean=false;
  eighth:boolean=false;

  newkey:any;
  number=0;
  base64Image:any;
  picurl:any;
  picdata:any;

  time:any;
  storeName:any;
 
  designarray=[];
@ViewChild('datePicker') datePicker;
  @ViewChild('timePicker') timePicker;
  @ViewChild('timePicker2') timePicker2;
  firedata = firebase.database().ref('store');
  ninety:boolean=false;
  designFlag:boolean=false;
  designCount:any=0;
  designerFlag:boolean=false;
  designerCount:any=0;
  keywords:any;
  keyarray=[];
  numberofpeople:any;
  myDateStart:any="13:00";
  store:any;
  myDateEnd:any="22:00";
  description:any;
  tel:any;
  mainImage:any;
  dutytoinput=[];
  seventhImage:any;
  fifthImage:any;
  sixthImage:any;
  firstImage:any;
  secondImage:any;
  thirdImage:any;
  fourthImage:any;
  eighthImage:any;
  ninethImage:any;
  tenthImage:any;
  eleventhImage:any;
  twelvethImage:any;
  descriptionImage:any;
  address:any;
  callback:any;
  thirty:boolean=true;
  sixty:boolean=false;
  id:any;
  mypicref:any;
  endofthismonth:any;
  month:any;
  today:any;
  selectDayOfWeek:any;

  getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  constructor(public sanitizer: DomSanitizer,public modal:ModalController,public camera:Camera,public alertCtrl: AlertController,public view:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.thirty);
    console.log(this.sixty);
    console.log(this.timePicker);
    console.log(this.timePicker2);
    var thisday = new Date();
    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
    var month = thisday.getMonth();
    var date = thisday.getDate();
    var hour = thisday.getHours();
    var minute = thisday.getMinutes();
    var fullyear = thisday.getFullYear();
    var second=thisday.getSeconds();
    console.log("this is the day")

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
   

    this.callback=this.navParams.get("callback");
    this.mypicref=firebase.storage().ref('/');

    /**
     *   "keyword":this.newkey,
      "reservationStart":this.myDateStart,
      "reservationEnd":this.myDateEnd,
      "reservationNumber":this.numberofpeople,
      "timeInterval":timeInterval

     */
    
    
  }
  uploadImage(imageURI,index){
    console.log("key and index is : "+this.store);
      let storageRef = firebase.storage().ref();
      var result="design"+(index);
      console.log("result is : "+result);
          var a = this.mypicref.child(this.store).child(result)
      this.encodeImageUri(imageURI, (image64)=>{
        console.log("image64 converted done");
        console.log(image64);

        // this.designarray.push({"url":image64})
        // if(index==0){
        //   this.designurl1=image64;
        // }
        // if(index==1){
        //   this.designurl2=image64;
        // }
        // if(index==2){
        //   this.designurl3=image64;
        // }
       
        a.putString(image64, 'data_url',{contentType:'image/jpeg'})
        .then(snapshot => {
          console.log(snapshot);
          this.mypicref.child(this.store).child(result).getDownloadURL().then((url)=>{
          this.designarray.push({"url":url,"no":index});
          this.firedata.child(this.store).child("designarray").set(this.designarray);
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
  takePhotoForMulti(flag){
    var value="";
    let modal = this.modal.create(Cameraselect2Page);
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
          this.uploadImageToFirebase(imagedata.data[i],(i+this.designarray.length+1));

          // this.uploadImage(this.picdata,i);
        }
       
      }
    }
  });
  }

  addDesigner(){

    if(this.designerCount>19){
      window.alert("20개 이상 등록불가능합니다.");
    }else{

      let modal = this.modal.create(CameraselectPage);
      modal.onDidDismiss(imagedata => {
        var value="";
       
          console.log("get pic");
          if(imagedata!=undefined){
            if(imagedata.flag=="delete"){
  
              // this.firedata.child(this.store).child("designarray").child(v).remove();
              // this.generateagain();
  
            }else{
              console.log(this.designerCount);
              this.picdata=imagedata.data;
              this.base64Image = "data:image/jpeg;base64," + imagedata.data;
    
                  value="designer"+this.designerCount;
                  this.picurl=this.base64Image;
                  this.picdata=imagedata.data;
                  this.upload(value,this.picdata);
            }
           
          }
  
          
      });


    }
  }
  addPhoto(){

    console.log(this.designCount);
    // if(this.designCount==1){
    //   //2번째 디자인을 추가하는것. 
    //   this.changedesign("design1")
    // }

    this.changedesign2()

  }

  changedesign2(){
 //design add
 let modal = this.modal.create(Cameraselect2Page);
    modal.onDidDismiss(imagedata => {
      var value="";
     
        console.log("get pic");
        if(imagedata!=undefined){
          
            this.picdata=imagedata.data;
            this.base64Image = "data:image/jpeg;base64," + imagedata.data;
  
                this.picurl=this.base64Image;
                this.picdata=imagedata.data;
                for(var i=0; i<imagedata.data.length; i++){
                  console.log("uploading..."+i);
                  this.picdata=imagedata.data[i];
                  this.uploadImageToFirebase(imagedata.data[i],(this.designarray.length+(i+1)));
        
                }

            
                this.generateagain();
          }
         

        
    });
    modal.present();

  }
  offdelete(v){
    let modal = this.modal.create(OffanddeletePage);
    
    modal.onDidDismiss(imagedata => {

      console.log(imagedata);
      console.log("mmmmmmmm");
      console.log(imagedata.flag);
      console.log("?????")
      console.log(imagedata.data);
      console.log(v);
      if(imagedata.flag=="delete"){

        // var designer="";
        // var designername="";
        // if(v==0){
        //   designer = "designerImage";
        //   designername="designername";
        // }else{
        //   designer = "designerImage"+v;
        //   designername="designername"+v;
        // }
        // console.log(designer);
        // console.log(designername);
       if(v==0){
        this.firedata.child(this.store).update({
          designerImage:"none",
          designername:"none"
        })
       }
       if(v==1){
        this.firedata.child(this.store).update({
          designerImage1:"none",
          designername1:"none"
        })
       }
       if(v==2){
        this.firedata.child(this.store).update({
          designerImage2:"none",
          designername2:"none"
        })
       }
       if(v==3){
        this.firedata.child(this.store).update({
          designerImage3:"none",
          designername3:"none"
        })
       }
       if(v==4){
        this.firedata.child(this.store).update({
          designerImage4:"none",
          designername4:"none"
        })
       }
       if(v==5){
        this.firedata.child(this.store).update({
          designerImage5:"none",
          designername5:"none"
        })
       }
       if(v==6){
        this.firedata.child(this.store).update({
          designerImage6:"none",
          designername6:"none"
        })
       }
       if(v==7){
        this.firedata.child(this.store).update({
          designerImage7:"none",
          designername7:"none"
        })
       }
       if(v==8){
        this.firedata.child(this.store).update({
          designerImage8:"none",
          designername8:"none"
        })
       }
       if(v==9){
        this.firedata.child(this.store).update({
          designerImage9:"none",
          designername9:"none"
        })
       }
       if(v==10){
        this.firedata.child(this.store).update({
          designerImage10:"none",
          designername10:"none"
        })
       }
       if(v==11){
        this.firedata.child(this.store).update({
          designerImage11:"none",
          designername11:"none"
        })
       }
       if(v==12){
        this.firedata.child(this.store).update({
          designerImage12:"none",
          designername12:"none"
        })
       }
       if(v==13){
        this.firedata.child(this.store).update({
          designerImage13:"none",
          designername13:"none"
        })
       }
       if(v==14){
        this.firedata.child(this.store).update({
          designerImage14:"none",
          designername14:"none"
        })
       }
       if(v==15){
        this.firedata.child(this.store).update({
          designerImage15:"none",
          designername15:"none"
        })
       }
       if(v==16){
        this.firedata.child(this.store).update({
          designerImage16:"none",
          designername16:"none"
        })
       }
       if(v==17){
        this.firedata.child(this.store).update({
          designerImage17:"none",
          designername17:"none"
        })
       }
       if(v==18){
        this.firedata.child(this.store).update({
          designerImage18:"none",
          designername18:"none"
        })
       }
       if(v==19){
        this.firedata.child(this.store).update({
          designerImage19:"none",
          designername19:"none"
        })
       }
       this.generateagain();

      }else{
        this.picurl=this.base64Image;
        this.picdata=imagedata.data;
        this.upload(v,this.picdata);
      }
    });
    modal.present();
  }
  changedesign(v){
    //design modify
    console.log(this.designarray.length);
    console.log(v);
    console.log(this.designarray);
    console.log(this.designarray[v])
    let modal = this.modal.create(Cameraselect3Page);
    modal.onDidDismiss(imagedata => {
      var value="";
        console.log("get pic");
        console.log(imagedata);
        if(imagedata!=undefined){
            this.firedata.child(this.store).child("designarray").child(v).remove();
            this.generateagain();

            this.base64Image = "data:image/jpeg;base64," + imagedata.data;
  
                value=v;
                this.picurl=this.base64Image;
                var picdata=imagedata;
                // for(var i=0; i<imagedata.data.length; i++){
                //   console.log("uploading..."+i);
                //   this.picdata=imagedata.data[i];
                //   this.uploadImageToFirebase(imagedata.data[i],v);
        
                // }

                this.mypicref.child(this.store).child(value)
                .putString(picdata,'base64',{contentType:'image/jpeg'})
                .then(savepic=>{
                  console.log("saving pic");
                  console.log(savepic);
                  this.mypicref.child(this.store).child(value).getDownloadURL().then((url)=> {
                    console.log("new url is : "+url);

                    this.designarray.splice(v,1);
                    this.designarray.push({"url":url,"no":v});
                    console.log("last call");
                    console.log(this.designarray);
                      this.firedata.child(this.store).child("designarray").set(this.designarray);
                  });
                }).catch((e)=>{
                  console.log(e);
                })
                this.generateagain();
         
        }

        
    });
    modal.present();
  }
  modify(v){
    var value="";
    const options : CameraOptions={
      quality:50,
      targetHeight:600,
      targetWidth:600,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE
    }

    if(v=="description"){
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'keyword',
          placeholder: '수정할 문구를 작성해주세요'
        }
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
          }
        },
        {
          text: '검색',
          handler: data => {
            console.log(data.keyword);
            this.firedata.child(this.store).update({
              "description":data.keyword
            })
            this.generateagain();
          }
        }
      ]
    });
    alert.present();
    }else if(v=="tel"){

    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'keyword',
          placeholder: '수정할 번호를 작성해주세요'
        }
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
          }
        },
        {
          text: '검색',
          handler: data => {
            console.log(data.keyword);
            this.firedata.child(this.store).update({
              "tel":data.keyword
            })
            this.generateagain();
          }
        }
      ]
    });
    alert.present();


    }else{
      let modal = this.modal.create(CameraselectPage);
    modal.onDidDismiss(imagedata => {
      var value="";
        this.picdata=imagedata.data;
        this.base64Image = "data:image/jpeg;base64," + imagedata.data;
        console.log("get pic");
        if(imagedata.data!=undefined){
              value=v;
              this.picurl=this.base64Image;
              this.picdata=imagedata.data;
              this.upload(v,this.picdata);
        }

        
    });
    modal.present();
    } 
    // if(v=="mainImage"){
    //   const result= this.camera.getPicture(options).then(imagedata=>{
    //     // this.viewCtrl.dismiss({data:imagedata});
    //     this.base64Image = "data:image/jpeg;base64," + imagedata;
    //     if(imagedata!=undefined){
    //         value="mainImage.png";
    //         this.picurl=this.base64Image;
    //         this.picdata=imagedata;
    //         this.upload("main",this.picdata);
    //     }
    //   });
    // }else if(v=="firstImage"){
    //   const result= this.camera.getPicture(options).then(imagedata=>{
    //     // this.viewCtrl.dismiss({data:imagedata});
    //     this.base64Image = "data:image/jpeg;base64," + imagedata;
    //     if(imagedata!=undefined){
    //         value="firstImage.png";
    //         this.picurl=this.base64Image;
    //         this.picdata=imagedata;
    //         this.upload("first",this.picdata);
    //     }
    //   });
    // }else if(v=="secondImage"){
    //   const result= this.camera.getPicture(options).then(imagedata=>{
    //     // this.viewCtrl.dismiss({data:imagedata});
    //     this.base64Image = "data:image/jpeg;base64," + imagedata;
    //     if(imagedata!=undefined){
    //         value="secondImage.png";
    //         this.picurl=this.base64Image;
    //         this.picdata=imagedata;
    //         this.upload("second",this.picdata);
    //     }
    //   });
    // }else if(v=="thirdImage"){
    //   const result= this.camera.getPicture(options).then(imagedata=>{
    //     // this.viewCtrl.dismiss({data:imagedata});
    //     this.base64Image = "data:image/jpeg;base64," + imagedata;
    //     if(imagedata!=undefined){
    //         value="thirdImage.png";
    //         this.picurl=this.base64Image;
    //         this.picdata=imagedata;
    //         this.upload("third",this.picdata);
    //     }
    //   });
    // }else if(v=="fourthImage"){
    //   const result= this.camera.getPicture(options).then(imagedata=>{
    //     // this.viewCtrl.dismiss({data:imagedata});
    //     this.base64Image = "data:image/jpeg;base64," + imagedata;
    //     if(imagedata!=undefined){
    //         value="fourthImage.png";
    //         this.picurl=this.base64Image;
    //         this.picdata=imagedata;
    //         this.upload("fourth",this.picdata);
    //     }
    //   });
    // }else if(v=="fifthImage"){
    //   const result= this.camera.getPicture(options).then(imagedata=>{
    //     // this.viewCtrl.dismiss({data:imagedata});
    //     this.base64Image = "data:image/jpeg;base64," + imagedata;
    //     if(imagedata!=undefined){
    //         value="fifthImage.png";
    //         this.picurl=this.base64Image;
    //         this.picdata=imagedata;
    //         this.upload("fifth",this.picdata);
    //     }
    //   });
    // }else if(v=="sixthImage"){
    //   const result= this.camera.getPicture(options).then(imagedata=>{
    //     // this.viewCtrl.dismiss({data:imagedata});
    //     this.base64Image = "data:image/jpeg;base64," + imagedata;
    //     if(imagedata!=undefined){
    //         value="sixthImage.png";
    //         this.picurl=this.base64Image;
    //         this.picdata=imagedata;
    //         this.upload("sixth",this.picdata);
    //     }
    //   });
    // }else if(v=="seventhImage"){
    //   const result= this.camera.getPicture(options).then(imagedata=>{
    //     // this.viewCtrl.dismiss({data:imagedata});
    //     this.base64Image = "data:image/jpeg;base64," + imagedata;
    //     if(imagedata!=undefined){
    //         value="seventhImage.png";
    //         this.picurl=this.base64Image;
    //         this.picdata=imagedata;
    //         this.upload("seventh",this.picdata);
    //     }
    //   });
    // }
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
       if(this.today+1>this.endofthismonth){
         todayLabel="false";
       }
     }else if(v==2){
       console.log("222"+this.flag)
       todayLabel = week[today+2];
       if(todayLabel==undefined){
         console.log(this.flag+"flag"+week[this.flag])
         todayLabel = week[this.flag];
       }
       this.seconddate=this.today+2;
       if(this.today+2-this.endofthismonth==1){
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

  generateagain(){
    console.log(this.store);
    this.firedata.child(this.store).once('value',(snapshot)=>{
      console.log(snapshot.val());
    
      for(var result in snapshot.val()){
        console.log(result);
        if(result=="description"){
          this.description=snapshot.val()[result]
        }
        if(result=="address"){
          this.address=snapshot.val()[result]
        }
        if(result=="mainImage"){
          this.mainImage=snapshot.val()[result]
        }
        if(result=="firstImage"){
          this.firstImage=snapshot.val()[result]
        }
        if(result=="secondImage"){
          this.secondImage=snapshot.val()[result]
        }
        if(result=="thirdImage"){
          this.thirdImage=snapshot.val()[result]
        }
        if(result=="fourthImage"){
          this.fourthImage=snapshot.val()[result]
        }
        if(result=="fifthImage"){
          this.fifthImage=snapshot.val()[result]
        }
        if(result=="sixthImage"){
          this.sixthImage=snapshot.val()[result]
        }
        if(result=="seventhImage"){
          this.seventhImage=snapshot.val()[result]
        }
        if(result=="eighthImage"){
          this.eighthImage=snapshot.val()[result]
        }
        if(result=="ninethImage"){
          this.ninethImage=snapshot.val()[result]
        }
        if(result=="tenthImage"){
          this.tenthImage=snapshot.val()[result]
        }
        if(result=="eleventhImage"){
          this.eleventhImage=snapshot.val()[result]

        }
        if(result=="twelvethImage"){
          this.twelvethImage=snapshot.val()[result]
        }
        if(result=="name"){
          this.storeName=snapshot.val()[result]
        }

        if(result=="designarray"){
          this.designarray=[];

          console.log("designarray com e"+result);
          console.log(snapshot.val()[result]);
          for(var i=0; i<snapshot.val()[result].length; i++){
            if(snapshot.val()[result][i]!=empty&&snapshot.val()[result][i]!=undefined){
              console.log(i+"input to array");
              this.designarray.push(snapshot.val()[result][i]);
            }
          
          }
          console.log(this.designarray);
          this.firedata.child(this.store).child("designarray").set(this.designarray);

          console.log(this.designarray);
          // for(var a in snapshot.val()[result]){
          //   this.designFlag=true;
          //   console.log(snapshot.val()[result][a].url);
          //   
          // }
          // console.log(this.designarray);
          //
        }
          
        // }
        // if(result=="designImage1"){

        //   this.designImage1=snapshot.val()[result]
        //   if(this.designImage1=="none"){
        //     if(this.designFlag){
        //       this.designCount=1;
        //       this.designFlag=false;
        //     }else{

        //     }
           
        //   }
        // }
        // if(result=="designImage2"){
        //   this.designImage2=snapshot.val()[result]
        //   if(this.designImage2=="none"){
        //     if(this.designFlag){
        //       this.designCount=2;
        //       this.designFlag=false;
        //     }else{
              
        //     }
        //   }
        // }
        // if(result=="designImage3"){
        //   this.designImage3=snapshot.val()[result]
        // }
        // if(result=="designImage4"){
        //   this.designImage4=snapshot.val()[result]
        // }
        // if(result=="designImage5"){
        //   this.designImage5=snapshot.val()[result]
        // }
        // if(result=="designImage6"){
        //   this.designImage6=snapshot.val()[result]
        // }
        // if(result=="designImage7"){
        //   this.designImage7=snapshot.val()[result]
        // }
        // if(result=="designImage8"){
        //   this.designImage8=snapshot.val()[result]
        // }
        // if(result=="designImage9"){
        //   this.designImage9=snapshot.val()[result]
        // }
        // if(result=="designImage10"){
        //   this.designImage10=snapshot.val()[result]
        // }
        // if(result=="designImage11"){
        //   this.designImage11=snapshot.val()[result]
        // }
        // if(result=="designImage12"){
        //   this.designImage12=snapshot.val()[result]
        // }
        // if(result=="designImage13"){
        //   this.designImage13=snapshot.val()[result]
        // }
        // if(result=="designImage14"){
        //   this.designImage14=snapshot.val()[result]
        // }
        // if(result=="designImage15"){
        //   this.designImage15=snapshot.val()[result]
        // }
        // if(result=="designImage16"){
        //   this.designImage16=snapshot.val()[result]
        // }
        // if(result=="designImage17"){
        //   this.designImage17=snapshot.val()[result]
        // }
        // if(result=="designImage18"){
        //   this.designImage18=snapshot.val()[result]
        // }
        // if(result=="designImage19"){
        //   this.designImage19=snapshot.val()[result]
        // }
        // if(result=="designImage20"){
        //   this.designImage20=snapshot.val()[result]
        // }
        // if(result=="designImage21"){
        //   this.designImage21=snapshot.val()[result]
        // }
        // if(result=="designImage22"){
        //   this.designImage22=snapshot.val()[result]
        // }
        // if(result=="designImage23"){
        //   this.designImage23=snapshot.val()[result]
        // }
        // if(result=="designImage24"){
        //   this.designImage24=snapshot.val()[result]
        // }
        // if(result=="designImage25"){
        //   this.designImage25=snapshot.val()[result]
        // }
        // if(result=="designImage26"){
        //   this.designImage26=snapshot.val()[result]
        // }
        // if(result=="designImage27"){
        //   this.designImage27=snapshot.val()[result]
        // }
        // if(result=="designImage28"){
        //   this.designImage28=snapshot.val()[result]
        // }
        // if(result=="designImage29"){
        //   this.designImage29=snapshot.val()[result]
        // }
        // if(result=="designImage30"){
        //   this.designImage30=snapshot.val()[result]
        // } if(result=="designImage31"){
        //   this.designImage31=snapshot.val()[result]
        // }
        // if(result=="designImage32"){
        //   this.designImage32=snapshot.val()[result]
        // }
        // if(result=="designImage33"){
        //   this.designImage33=snapshot.val()[result]
        // }
        // if(result=="designImage34"){
        //   this.designImage34=snapshot.val()[result]
        // }
        // if(result=="designImage35"){
        //   this.designImage35=snapshot.val()[result]
        // }
        // if(result=="designImage36"){
        //   this.designImage36=snapshot.val()[result]
        // }
        // if(result=="designImage37"){
        //   this.designImage37=snapshot.val()[result]
        // }
        // if(result=="designImage38"){
        //   this.designImage38=snapshot.val()[result]
        // }
        // if(result=="designImage39"){
        //   this.designImage39=snapshot.val()[result]
        // }
        
       

        if(result=="designerImage"){
          this.designerImage=snapshot.val()[result]
          if(this.designerImage=="none"){
            this.designerCount=0;
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage1"){
          this.designerImage1=snapshot.val()[result]
          if(this.designerImage1=="none"){
            if(this.designerFlag){
              this.designerCount=1;
              this.designerFlag=false;
            }else{
  
            }
          }else{
            this.designerFlag=true;
          }
          
        }
        if(result=="designerImage2"){
          this.designerImage2=snapshot.val()[result]
          if(this.designerImage2=="none"){
            if(this.designerFlag){
              this.designerCount=2;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
         
        }
        if(result=="designerImage3"){
          this.designerImage3=snapshot.val()[result]
          if(this.designerImage3=="none"){
            if(this.designerFlag){
              this.designerCount=3;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage4"){
          this.designerImage4=snapshot.val()[result]
          if(this.designerImage4=="none"){
            if(this.designerFlag){
              this.designerCount=4;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage5"){
          this.designerImage5=snapshot.val()[result]
          if(this.designerImage5=="none"){
            if(this.designerFlag){
              this.designerCount=5;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage6"){
          this.designerImage6=snapshot.val()[result]
          if(this.designerImage6=="none"){
            if(this.designerFlag){
              this.designerCount=6;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage7"){
          this.designerImage7=snapshot.val()[result]
          if(this.designerImage7=="none"){
            if(this.designerFlag){
              this.designerCount=7;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage8"){
          this.designerImage8=snapshot.val()[result]
          if(this.designerImage8=="none"){
            if(this.designerFlag){
              this.designerCount=8;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage9"){
          this.designerImage9=snapshot.val()[result]
          if(this.designerImage9=="none"){
            if(this.designerFlag){
              this.designerCount=9;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage10"){
          this.designerImage10=snapshot.val()[result]
          if(this.designerImage10=="none"){
            if(this.designerFlag){
              this.designerCount=10;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage11"){
          this.designerImage11=snapshot.val()[result]
          if(this.designerImage11=="none"){
            if(this.designerFlag){
              this.designerCount=11;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage12"){
          this.designerImage12=snapshot.val()[result]
          if(this.designerImage12=="none"){
            if(this.designerFlag){
              this.designerCount=12;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage13"){
          this.designerImage13=snapshot.val()[result]
          if(this.designerImage13=="none"){
            if(this.designerFlag){
              this.designerCount=13;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage14"){
          this.designerImage14=snapshot.val()[result]
          if(this.designerImage14=="none"){
            if(this.designerFlag){
              this.designerCount=14;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage15"){
          this.designerImage15=snapshot.val()[result]
          if(this.designerImage15=="none"){
            if(this.designerFlag){
              this.designerCount=15;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage16"){
          this.designerImage16=snapshot.val()[result]
          if(this.designerImage16=="none"){
            if(this.designerFlag){
              this.designerCount=16;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage17"){
          this.designerImage17=snapshot.val()[result]
          if(this.designerImage17=="none"){
            if(this.designerFlag){
              this.designerCount=17;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage18"){
          this.designerImage18=snapshot.val()[result]
          if(this.designerImage18=="none"){
            if(this.designerFlag){
              this.designerCount=18;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }
        if(result=="designerImage19"){
          this.designerImage19=snapshot.val()[result]
          if(this.designerImage19=="none"){
            if(this.designerFlag){
              this.designerCount=19;
              this.designerFlag=false;
            }else{
            }
          }else{
            this.designerFlag=true;
          }
        }

        if(result=="designername"){
          this.designername=snapshot.val()[result]
        }
        if(result=="designername1"){
          this.designername1=snapshot.val()[result]
        }
        if(result=="designername2"){
          this.designername2=snapshot.val()[result]
        }
        if(result=="designername3"){
          this.designername3=snapshot.val()[result]
        }
        if(result=="designername4"){
          this.designername4=snapshot.val()[result]
        }
        if(result=="designername5"){
          this.designername5=snapshot.val()[result]
        }
        if(result=="designername6"){
          this.designername6=snapshot.val()[result]
        }
        if(result=="designername7"){
          this.designername7=snapshot.val()[result]
        }
        if(result=="designername8"){
          this.designername8=snapshot.val()[result]
        }
        if(result=="designername9"){
          this.designername9=snapshot.val()[result]
        }
        if(result=="designername10"){
          this.designername10=snapshot.val()[result]
        }
        if(result=="designername11"){
          this.designername11=snapshot.val()[result]
        }
        if(result=="designername12"){
          this.designername12=snapshot.val()[result]
        }
        if(result=="designername13"){
          this.designername13=snapshot.val()[result]
        }
        if(result=="designername14"){
          this.designername14=snapshot.val()[result]
        }
        if(result=="designername15"){
          this.designername15=snapshot.val()[result]
        }
        if(result=="designername16"){
          this.designername16=snapshot.val()[result]
        }
        if(result=="designername17"){
          this.designername17=snapshot.val()[result]
        }
        if(result=="designername18"){
          this.designername18=snapshot.val()[result]
        }
        if(result=="designername19"){
          this.designername19=snapshot.val()[result]
        }
        console.log(this.designImage);
        console.log(this.designerImage);
        console.log(this.designername);
        console.log("mmmmmmmmmmmm")
        if(result=="reservationList"){
          for(var p in snapshot.val().reservationList){
            this.reservationDes.push(snapshot.val().reservationList[p]);
          }
         
        }


        if(result=="tel"){
          this.tel=snapshot.val()[result]
        }

        console.log(this.description);
        console.log(this.address);
        console.log(this.mainImage);
        console.log(this.secondImage);
        console.log(this.thirdImage);
        console.log(this.fourthImage);
        if(result=="keywords"){
          this.keywords=snapshot.val()[result]
        }
        if(result=="reservationStart"){
          
        this.myDateStart=snapshot.val()[result];
        }
        if(result=="reservationEnd"){
          console.log(snapshot.val()[result])
          this.myDateEnd=snapshot.val()[result]
        }
        if(result=="reservationNumber"){
          this.numberofpeople=snapshot.val()[result]
        }
        if(result=="timeInterval"){
          this.time=snapshot.val()[result]
        }
        
      }
      var startHour=9
      var startMinute="00";
      var endHour=20
      var endMinute="00";

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
        //60
       

      }else{
        console.log("uuuuuuuuuuundefined!!!");
        this.time=60;
      }

      console.log("timeinterval : "+this.time);
       if(this.time==30){
   
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
      if(this.time==90){

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
        //  this.reservation.push({"time":newHour+":00"});
         var flag=false;
       }else{
        //  this.reservation.push({"time":newHour+":30"});
         var flag=true;
       }
      //  console.log(this.reservation);
      
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

      if(this.time==60){

        console.log("minus start");
        console.log(endHour-startHour);
        console.log(startHour);
        console.log(Number(startHour))
        var arraydisabled=[];
        // if(this.disabledTime!=undefined){
        //   arraydisabled=this.disabledTime.split(",");
        // }else{

        // }
        

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
      console.log(this.myDateStart);
      console.log(this.myDateEnd);
      console.log(this.keywords);
      console.log(this.time);
      if(this.time==30){

        this.thirty=true;
        this.checkbox(1);
      }
      if(this.time==60){
        this.sixty=true;
        this.checkbox(2);
      }
      if(this.time==90){
        this.ninety=true;
        this.checkbox(3);
      }
    });
  }
  async upload(flag,picd){
    console.log("uploading..."+flag+"///"+picd);
    //https://firebasestorage.googleapis.com/v0/b/cosmetics-bac3b.appspot.com/o/rF0kQIisJ4MOyDRJwcHLlB1YKou2%2F20180912%2Fpicture.png?alt=media&token=cff7bf0d-eec2-4916-a775-320b5743b26c
    var value="";
    if(flag=="main"){
      value="mainImage.png";
      this.mainImage="";
    }
    if(flag=="first"){
      value="firstImage.png";
      this.firstImage="";
    }
    if(flag=="second"){
      value="secondImage.png";
      this.secondImage="";
    }
    if(flag=="third"){
      value="thirdImage.png";
      this.thirdImage="";
    }
    if(flag=="fourth"){
      value="fourthImage.png";
      this.fourthImage="";
    }
    if(flag=="fifth"){
      value="fifthImage.png";
      this.fifthImage="";
    }
    if(flag=="sixth"){
      value="sixthImage.png";
      this.sixthImage="";
    }
    if(flag=="seventh"){
      value="seventhImage.png";
      this.seventhImage="";
    }
    if(flag=="description"){
      value="descriptionImage.png";
      this.descriptionImage="";
    }
    if(flag=="designer"){
      value="design";
      this.designImage="";
    }
    if(flag=="designer1"){
      value="design1";
      this.designImage1="";
    }
    if(flag=="designer2"){
      value="design2";
      this.designImage2="";
    }
    if(flag=="designer3"){
      value="design3";
      this.designImage3="";
    }
    if(flag=="designer4"){
      value="design4";
      this.designImage5="";
    }
    console.log("pic data is : "+picd);
    console.log(picd);
    console.log(value);
    console.log(this.store);

    var newvalue="designer"+flag;
    console.log(newvalue);
    this.mypicref.child(this.store).child(newvalue)
    .putString(picd,'base64',{contentType:'image/jpeg'})
    .then(savepic=>{
      console.log("saving pic");
      console.log(savepic);
      this.mypicref.child(this.store).child(newvalue).getDownloadURL().then((url)=> {
        console.log("new url is : "+url);

        if(flag=="main"){
          this.firedata.child(this.store).update({
            "mainImage":url
          })
        }
        if(flag=="first"){
          this.firedata.child(this.store).update({
            "firstImage":url
          })
        }
        if(flag=="second"){
          this.firedata.child(this.store).update({
            "secondImage":url
          })
        }
        if(flag=="third"){
          this.firedata.child(this.store).update({
            "thirdImage":url
          })
        }
        if(flag=="fourth"){
          this.firedata.child(this.store).update({
            "fourthImage":url
          })
        }
        if(flag=="fifth"){
          this.firedata.child(this.store).update({
            "fifthImage":url
          })
        }
        if(flag=="sixth"){
          this.firedata.child(this.store).update({
            "sixthImage":url
          })
        }
        if(flag=="seventh"){
          this.firedata.child(this.store).update({
            "seventhImage":url
          })
        }
        if(flag=="eighth"){
          this.firedata.child(this.store).update({
            "eighthImage":url
          })
        }
        if(flag=="nineth"){
          this.firedata.child(this.store).update({
            "ninethImage":url
          })
        }
        if(flag=="tenth"){
          this.firedata.child(this.store).update({
            "tenthImage":url
          })
        }
        if(flag=="eleventh"){
          this.firedata.child(this.store).update({
            "eleventhImage":url
          })
        }
        if(flag=="twelveth"){
          this.firedata.child(this.store).update({
            "twelvethImage":url
          })
        }

        if(flag==0){
          this.firedata.child(this.store).update({
            "designerImage":url,
            "designername":this.designername
          })
        }
        if(flag==1){
          this.firedata.child(this.store).update({
            "designerImage1":url,
            "designername1":this.designername1
          })
        }
        if(flag==2){
          this.firedata.child(this.store).update({
            "designerImage2":url,
            "designername2":this.designername2
          })
        }
        if(flag==3){
          this.firedata.child(this.store).update({
            "designerImage3":url,
            "designername3":this.designername3
          })
        }
        if(flag==4){
          this.firedata.child(this.store).update({
            "designerImage4":url,
            "designername4":this.designername4
          })
        }
        if(flag==5){
          this.firedata.child(this.store).update({
            "designerImage5":url,
            "designername5":this.designername5
          })
        }
        if(flag==6){
          this.firedata.child(this.store).update({
            "designerImage6":url,
            "designername6":this.designername6
          })
        }
        if(flag==7){
          this.firedata.child(this.store).update({
            "designerImage7":url,
            "designername7":this.designername7
          })
        }
        if(flag==8){
          this.firedata.child(this.store).update({
            "designerImage8":url,
            "designername8":this.designername8
          })
        }
        if(flag==9){
          this.firedata.child(this.store).update({
            "designerImage9":url,
            "designername9":this.designername9
          })
        }
        if(flag==10){
          this.firedata.child(this.store).update({
            "designerImage10":url,
            "designername10":this.designername10
          })
        }
        if(flag==11){
          this.firedata.child(this.store).update({
            "designerImage11":url,
            "designername11":this.designername11
          })
        }
        if(flag==12){
          this.firedata.child(this.store).update({
            "designerImage12":url,
            "designername12":this.designername12
          })
        }
        if(flag==13){
          this.firedata.child(this.store).update({
            "designerImage13":url,
            "designername13":this.designername13
          })
        }
        if(flag==14){
          this.firedata.child(this.store).update({
            "designerImage14":url,
            "designername14":this.designername14
          })
        }
        if(flag==15){
          this.firedata.child(this.store).update({
            "designerImage15":url,
            "designername15":this.designername15
          })
        }
        if(flag==16){
          this.firedata.child(this.store).update({
            "designerImage16":url,
            "designername16":this.designername16
          })
        }
        if(flag==17){
          this.firedata.child(this.store).update({
            "designerImage17":url,
            "designername17":this.designername17
          })
        }
        if(flag==18){
          this.firedata.child(this.store).update({
            "designerImage18":url,
            "designername18":this.designername18
          })
        }
        if(flag==19){
          this.firedata.child(this.store).update({
            "designerImage19":url,
            "designername19":this.designername19
          })
        }


       
        this.generateagain();
      })
    }).catch((e)=>{
      console.log("ecome");
      console.log(e);
    })
  }
  offduty(name){
    this.dutylist=[];
    this.selectedDesigner=name;
    this.firedata.child(this.store).child("designermanagement").child(this.selectedDesigner).once("value",(snap)=>{
      if(snap.val()!=null){
        if(snap.val().date!=undefined){
          this.dutylist.push(snap.val().date);
        }
      }
      
    })
    setTimeout(() => {
      this.datePicker.open()
  }, 50)
    
  }
  haha(){
    window.alert("clicked");
  }
  clickdesigner2(v){
    console.log("vvvv"+v);
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
      console.log("wwwww");
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
      console.log(this.thirdimage);
      console.log(this.fourthImage);
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
      console.log(this.thirdimage);
      console.log(this.fourthImage);
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
      console.log(this.thirdimage);
      console.log(this.fourthImage);
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
     this.image8=true;
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
      this.image8=true;
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
      this.image8=true;
      this.image9=true;
      this.image10=true;
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
      this.image8=true;
      this.image9=true;
      this.image10=true;
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
      this.image8=true;
      this.image10=true;
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
      this.image8=true;
      this.image9=true;
      this.image10=true;
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
      this.image8=true;
      this.image9=true;
      this.image10=true;
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
      this.image8=true;
      this.image10=true;
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
      this.image8=true;
      this.image10=true;
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
      this.image8=true;
      this.image10=true;
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
      this.image8=true;
      this.image10=true;
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
      this.image8=true;
      this.image10=true;
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
      console.log(this.firstimage);
      this.selectedDesigner=this.designername19;
      console.log(this.secondimage);
    }
  
    this.reloadSchedule();
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
    this.makeAllOff();
    this.reloadSchedule();
    console.log(this.today+v);
    console.log(this.selectDay);
    // for(var i=0; i<this.offduty.length; i++){
    //   console.log(this.offduty[i].split("-")[2])
    //   if(this.selectDay==this.offduty[i].split("-")[2]){
    //     window.alert("오늘은 오프!")
      
    //     return;
    //   }
    // }
    console.log(this.selectDayOfWeek)
  }
  makeAllOff(){
    for(var i=0; i<this.reservationfinal.length; i++){
      this.reservationfinal[i].disabled=true;
    }
    console.log(this.reservationfinal);
  }
  makethisdayoff(v){
    console.log(v);
    console.log(this.store);
    console.log(this.selectDay);
    var newRef = this.firedata.child(this.store).child("reservationList").push();
    var newItem = { 
    "flag":"timeoff",
    "month":this.month,
    "time":v.time,
    "dayofweek":this.dayofweek,
    "day":this.selectDay,
    "designer":this.selectedDesigner
  };
  newRef.set(newItem);
  this.reloadSchedule();


  }
reloadSchedule(){
  for(var i=0; i<this.reservationfinal.length; i++){
      this.reservationfinal[i].disabled=false;
  }
  this.matchedDay=[];
  console.log(this.selectedDesigner);
  console.log(this.reservationDes);
  console.log(this.selectDay);
  for(var a in this.reservationDes){
    console.log(this.reservationDes[a]);
  //   console.log(this.reservationDes[a].designer);
  //   console.log(this.reservationDes[a].time);
  //   console.log(this.reservationDes[a].day);
    if(this.selectedDesigner==this.reservationDes[a].designer){
      if(this.month==this.reservationDes[a].month){

        console.log("matched month"+this.month);
        console.log(this.selectDay);
        console.log(this.reservationDes[a].day);
        if(this.reservationDes[a].day==this.selectDay){
          this.matchedDay.push(this.reservationDes[a].time);
        }
        }
      }
    }
   
  //   console.log(this.reservationDes[a].month);
  // }
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

  offdutycheck(name){
    this.selectedDesigner=name;
    console.log(name)
    this.dutylist=[];
    this.dutytoinput=[];
    this.firedata.child(this.store).child("designermanagement").child(name).once("value",(snap)=>{
      if(snap.val()!=null){
            console.log(snap.val());
            for(var a in snap.val()){
              console.log(snap.val()[a]);
              this.dutylist.push(snap.val()[a].date)
              console.log(snap.val()[a].date);
            //   console.log(snap.val().date[i]);
            //   if(snap.val().date[i]!=undefined){
            //     console.log(snap.val().date[i]);
            //     this.dutylist.push(snap.val().date[i]);
            //   }
            }
            // this.firedata.child(this.store).child("designermanagement").child(name).update({
            //   "name":name,
            //   "date":this.dutylist
            // })
            console.log(this.dutylist);
            console.log(this.dutylist.length);
            console.log(this.dutylist);
            let modal = this.modal.create(DutyoffPage,{"array":this.dutylist,"name":name,"store":this.store});
            modal.onDidDismiss(imagedata => {
             
            });
            modal.present();
        
      }else{
        window.alert("등록된 휴무가없습니다")
    }
    // var m="";

    // console.log(this.dutylist);
    // console.log(this.dutylist[0]);
    // console.log(this.dutylist[0][0]);
    // console.log(this.dutylist[0][1]);
    // console.log(this.dutylist[0][2]);
    // console.log(this.dutylist[0][3]);
    // console.log(this.dutylist[0].length);
    // for(var i=0; i<this.dutylist[0].length; i++){

    //   console.log(this.dutylist[0][i]);
    //   if(this.dutylist[0][0][i]!=undefined){

    //     // this.dutytoinput.push(this.dutylist[0][i]);
    //     // console.log(this.dutylist[0][i]);
    //     // this.dutylist[0].splice(i,1)
    //   }
    // }
   
// for(var i=0; i<this.dutylist[0].length; i++){
// m+=this.sanitizer.bypassSecurityTrustHtml("<span (click)='haha()'>"+this.dutylist[0][i]+"</span>")+'<br><br>';
// }
// console.log("m is ");
// console.log(m);
//     var message = this.dutylist[0]
//     let alert = this.alertCtrl.create({
//       title: '등록된 휴무표시',
//       message: m,
//       buttons: [
//         {
//           text: '확인',
//           handler: data => {
//           }
//         }
//       ]
//     });
//     alert.present();
      
    })
  }
  dutyselect(){
    
    console.log(this.dutySelected);
  
  //   this.firedata.child(this.store).child("designermanagement").child(this.selectedDesigner).once("value",(snap)=>{
  //     if(snap.val()!=null){
  //       if(snap.val().date!=undefined){
  //           console.log(snap.val().date);
  //           for(var i=0; i<snap.val().date[0].length; i++){
  //             console.log(snap.val().date[i]);
  //             if(snap.val().date[i]!=undefined){
  //               console.log(snap.val().date[i]);
  //               this.dutylist.push(snap.val().date[i]);
  //             }
  //           }
  //           console.log(this.dutylist);
  //           console.log(this.dutylist.length);
         
  //       }
  //     }else{
  //       console.log("adding for the first time")
  //       this.dutylist.push(this.dutySelected);
       
  //   }
  // })
  this.newRef = this.firedata.child(this.store).child("designermanagement").child(this.selectedDesigner).push();
  this.newRef.set({
    "name":this.selectedDesigner,
    "date":this.dutySelected,
    "key":this.newRef.key
       });
    // if(this.dutylist.length==0){
    //   
    // }else{
    //   console.log("else and put to 0 ")
    //   console.log(this.dutylist);
    //   this.dutylist.push(this.dutySelected);
    // }
    // console.log(this.dutylist);
    // this.firedata.child(this.store).child("designermanagement").child(this.selectedDesigner).update({
    //   "name":this.selectedDesigner,
    //   "date":this.dutylist
    // })
  }
  ionViewDidEnter(){
    this.store=this.navParams.get("store");
    console.log("store is : "+this.store);
    console.log(this.store);
    this.generateagain();
    console.log(this.timePicker);
    console.log(this.timePicker2);
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
    // if(this.flag){
    //   this.newkey=this.keyword;
    // }else{

    //   if(this.number>0){
        
    //     this.newkey=this.keyword.substring(this.number);

    //     console.log("cuttednew key is : "+this.newkey);
    //   }
    // }
  
   
    // if(this.newkey.indexOf(",")>-1){
    //   console.log("number rerere connect"+this.newkey)
    //   this.flag=false;

    //   console.log(this.newkey.indexOf(","))
    //   console.log(this.newkey.substring(0,this.newkey.indexOf(","))+"를 input");
    
    //   this.number=this.newkey.indexOf(",")+1;
    //   console.log("new nuber is : "+this.number);
    //   if(this.number>0){
    //     this.newkey=this.newkey.substring(this.number);
    //     console.log("222222cuttednew key is : "+this.newkey);
    //   }
    //   // this.newkey=this.newkey.substring((this.newkey.indexOf(",")+1));
    //   // console.log(this.newkey);
    //   // console.log(newkey.substring((newkey.indexOf(",")+1)));
    //   // console.log(this.keyword.indexOf(","))
    // }
  }
  checkbox(v){
    console.log("checkbox come"+v);
    if(v==1){
     
      this.sixty=false;
      this.ninety=false;
    }
    if(v==2){
     
      this.thirty=false;
      this.ninety=false;
    }
    if(v==3){
     
      this.sixty=false;
      this.thirty=false;
    }
  }
  filter(){
    console.log(this.myDateStart);
  }
  filter2(){
    console.log(this.myDateEnd);
  }
  end(){
    setTimeout(() => {
      this.timePicker2.open();
  }, 50)
   
  }
  start(){
    setTimeout(() => {
      this.timePicker.open();
  }, 50)
  }
  ionViewDidLoad() {
    this.navbar.backButtonClick = () => {
      console.log("back pressed")
      this.navCtrl.pop();
      this.callback("sds");
      ///here you can do wathever you want to replace the backbutton event
    };
    console.log('ionViewDidLoad IndexPage');
  }
  confirm(){

    console.log(this.keywords);
    console.log(this.newkey);
    console.log(this.thirty);
    console.log(this.sixty);
    console.log(this.ninety);
    console.log(this.myDateStart);
    console.log(this.myDateEnd);
    var timeInterval=0;
    if(this.thirty){

      timeInterval=30;
    }
    if(this.sixty){
      timeInterval=60;
    }
    if(this.ninety){
      timeInterval=90;
    }
    this.time=timeInterval;
    if(this.newkey==undefined){

      this.firedata.child(this.store).update({

        "keywords":this.keywords,
        "reservationStart":this.myDateStart,
        "reservationEnd":this.myDateEnd,
        "timeInterval":this.time
      })
    }else{

      this.firedata.child(this.store).update({

        "keywords":this.newkey,
        "reservationStart":this.myDateStart,
        "reservationEnd":this.myDateEnd,
        "reservationNumber":this.numberofpeople,
        "timeInterval":this.time
      })
    }
    this.view.dismiss()
  }

}
