import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { SearchPage } from '../pages/search/search';
import {JoinedPage} from '../pages/joined/joined';
import {LoginPage} from '../pages/login/login';
import { StoredetailPage } from '../pages/storedetail/storedetail';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';

import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { HomePage } from '../pages/home/home';
import {  ModuleWithProviders, Provider } from '@angular/core';
import { KakaoCordovaSDK } from 'kakao-sdk';
import { RequestPage } from '../pages/request/request';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MetroProvider } from '../providers/metro/metro';
import { MypagePage } from '../pages/mypage/mypage';
import { ManagementPage } from '../pages/management/management';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { CallNumber } from '@ionic-native/call-number';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Device } from '@ionic-native/device';
import { NgCalendarModule } from 'ionic2-calendar';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import { StoremanagementPage } from '../pages/storemanagement/storemanagement';
import { ReserveFinishPage } from '../pages/reserve-finish/reserve-finish';
import { CameraselectPage } from '../pages/cameraselect/cameraselect';
import { AlbumpagePage } from '../pages/albumpage/albumpage';
import { MainPage } from '../pages/main/main';
import { CalendarWeekPage } from '../pages/calendar-week/calendar-week';
import { DutyoffPage } from '../pages/dutyoff/dutyoff';
import { Rule2pagePage } from '../pages/rule2page/rule2page';
import { RulepagePage } from '../pages/rulepage/rulepage';
import { ImagePicker } from '@ionic-native/image-picker';
import { Cameraselect2Page } from '../pages/cameraselect2/cameraselect2';
import { Cameraselect3Page } from '../pages/cameraselect3/cameraselect3';

import { OffanddeletePage } from '../pages/offanddelete/offanddelete';
import { Cameraselect4Page } from '../pages/cameraselect4/cameraselect4';
import { AddproductPage } from '../pages/addproduct/addproduct';

// import {
//   CalendarCommonModule,
//   CalendarModuleConfig,
//   CalendarEventTitleFormatter,
//   CalendarDateFormatter
// } from './../../node_modules/angular-calendar/modules/calendar.module';
// import { CalendarMonthModule } from '../../node_modules/angular-calendar/modules/month/calendar-month.module';
// import { CalendarWeekModule } from '../../node_modules/angular-calendar/modules//week/calendar-week.module';
// import { CalendarDayModule } from '../../node_modules/angular-calendar/modules//day/calendar-day.module';
// import { CalendarUtils } from '../../node_modules/angular-calendar/modules/common/calendar-utils.provider';

// export * from '../../node_modules/angular-calendar/modules/common/calendar-common.module';
// export * from '../../node_modules/angular-calendar/modules/month/calendar-month.module';
// export * from '../../node_modules/angular-calendar/modules/week/calendar-week.module';
// export * from '../../node_modules/angular-calendar/modules/day/calendar-day.module';

var firebaseConfig = {

  apiKey: "AIzaSyC-QvsU4MkUpPwRlMTjjdWbUrCN7TKSZFM",
    authDomain: "hamm-93bfc.firebaseapp.com",
    databaseURL: "https://hamm-93bfc.firebaseio.com",
    projectId: "hamm-93bfc",
    storageBucket: "hamm-93bfc.appspot.com",
    messagingSenderId: "294884813349"
    

};

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    RequestPage,
    Cameraselect3Page,
    Rule2pagePage,
    OffanddeletePage,
    RulepagePage,
    StoremanagementPage,
    MypagePage,
    MyApp,
    JoinedPage,
    LoginPage,
    MainPage,
    ManagementPage,
    AlbumpagePage,
    DutyoffPage,
    HomePage,
    AddproductPage,
    SearchPage,
    CalendarWeekPage,
    CameraselectPage,

    Cameraselect4Page,
    Cameraselect2Page,
    StoredetailPage,
    ReserveFinishPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // NgCalendarModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // BrowserAnimationsModule,
    // CalendarUtils,
    // CalendarCommonModule,
    // CalendarMonthModule,
    // CalendarWeekModule,
    // CalendarDayModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // })
    // CalendarModule.forRoot()
    // CalendarModule.forRoot(Provider,
    //      CalendarModuleConfig)
    // CalendarWeekHoursViewModule

    // CalendarCommonModule,
    // CalendarMonthModule,
    // CalendarWeekModule,
    // CalendarDayModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RequestPage,
    CalendarWeekPage,
    OffanddeletePage,
    MainPage,
    AlbumpagePage,
    Cameraselect3Page,
    CameraselectPage,
    Cameraselect2Page,
    Rule2pagePage,
    RulepagePage,
    AddproductPage,
    Cameraselect4Page,
    DutyoffPage,
    StoremanagementPage,
    MyApp,
    MypagePage,
    ManagementPage,
    JoinedPage,
    LoginPage,
    StoredetailPage,
    SearchPage,
    HomePage,
    ReserveFinishPage
  ],
  providers: [
    StatusBar,
    UniqueDeviceID,
    ScreenOrientation,
    Device,
    PhotoViewer,
    IonicStorageModule,
    CallNumber, 
    Geolocation,
    Device,
    KakaoCordovaSDK,
    Deeplinks,
    Camera,
    SplashScreen,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MetroProvider
  ]
})
export class AppModule {}
// export class CalendarModule {
//   static forRoot(
//     dateAdapter: Provider,
//     config: CalendarModuleConfig = {}
//   ): ModuleWithProviders {
//     return {
//       ngModule: CalendarModule,
//       providers: [
//         dateAdapter,
//         config.eventTitleFormatter || CalendarEventTitleFormatter,
//         config.dateFormatter || CalendarDateFormatter,
//         config.utils || CalendarUtils
//       ]
//     };
//   }
// }
