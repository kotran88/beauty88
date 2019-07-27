import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';




import { Camera,CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
/**
 * Generated class for the CameraselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cameraselect2',
  templateUrl: 'cameraselect2.html',
})
export class Cameraselect2Page {
  imagePicker:any;
  constructor(public ip:ImagePicker,public viewCtrl: ViewController,public camera:Camera,public navCtrl: NavController, public navParams: NavParams) {
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
    
  const options = {
    // max images to be selected, defaults to 15. If this is set to 1, upon
  // selection of a single image, the plugin will return it.
  maximumImagesCount: 100,
  
  // max width and height to allow the images to be.  Will keep aspect
  // ratio no matter what.  So if both are 800, the returned image
  // will be at most 800 pixels wide and 800 pixels tall.  If the width is
  // 800 and height 0 the image will be 800 pixels wide if the source
  // is at least that wide.
  width: 600,
  height: 600,
  outputType:1
  
  // quality of resized image, defaults to 100
};
setTimeout(()=>{
  this.ip.getPictures(options).then((results) => {
    
    console.log(results);
    for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
       
    }
    this.viewCtrl.dismiss({"flag":"multi","data":results});
  }, (err) => { console.log(err)});
 
},1000)
  
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraselectPage22222');
  }
  confirm(){
    this.viewCtrl.dismiss();
  }

}
