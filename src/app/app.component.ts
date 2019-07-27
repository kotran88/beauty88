import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ImagePicker } from '@ionic-native/image-picker';
import { Deeplinks } from '@ionic-native/deeplinks';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainPage;

  constructor(screenOrientation:ScreenOrientation, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      // deeplinks.route({
      //   '/about': HomePage
      // }).subscribe(match => {
      //   // match.$route - the route we matched, which is the matched entry from the arguments to route()
      //   // match.$args - the args passed in the link
      //   // match.$link - the full link data
      //   console.log('Successfully matched route', match);
      // }, nomatch => {
      //   // nomatch.$link - the full link data
      //   console.error('Got a deeplink that didn\'t match', nomatch);
      // });

      if(platform.is("android")||platform.is("ios")){
    
        screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  
      }

      // splashScreen.hide();
    });
  }
}

