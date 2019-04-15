import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';

import { Camera,CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the OffanddeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-offanddelete',
  templateUrl: 'offanddelete.html',
})
export class OffanddeletePage {
  constructor(public viewCtrl: ViewController,public camera:Camera,public navCtrl: NavController, public navParams: NavParams) {
  }
  takePhoto(){
    console.log("Take photo!!!!");
    try{
      const options : CameraOptions={
        quality:50,
        targetHeight:600,
        targetWidth:600,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType:this.camera.DestinationType.DATA_URL,
        encodingType:this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        saveToPhotoAlbum:true
      }
      const result= this.camera.getPicture(options).then(imagedata=>{
        this.viewCtrl.dismiss({data:imagedata});
        
      })


    }catch(e){
      console.log("error "+e);
    }
  }
  getPhoto(){
    console.log("get photo come ");
    const options : CameraOptions={
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType:this.camera.DestinationType.DATA_URL,     
      quality: 50,
      targetWidth: 600,
      targetHeight: 600,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
    
  //   this.imagePicker.getPictures(
  //     function(results) {
  //         for (var i = 0; i < results.length; i++) {
  //             console.log('Image URI: ' + results[i]);
  //         }
  //     }, function (error) {
  //         console.log('Error: ' + error);
  //     }
  // );

    // this.ip.getPictures(options).then((results) => {
    //   for (var i = 0; i < results.length; i++) {
    //       console.log('Image URI: ' + results[i]);
    //       this.viewCtrl.dismiss({"flag":"multi","data":results});
    //   }
    // }, (err) => { console.log(err)});

      const result= this.camera.getPicture(options).then(imagedata=>{
      this.viewCtrl.dismiss({"flag":"single","data":imagedata});
      
    })

  }
  deletePhoto(){
    this.viewCtrl.dismiss({"flag":"delete"});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraselectPage');
  }
  confirm(){
    this.viewCtrl.dismiss();
  }
}
