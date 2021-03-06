import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ RestaurantsPage } from '../pages/index.pages';
import { ProfilePage } from '../pages/profile/profile';
import { CouponsPage } from '../pages/coupons/coupons';
import { MyreservationsPage } from '../pages/myreservations/myreservations';
import { ReservationPage } from '../pages/reservation/reservation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RestaurantsPage,
    ProfilePage,
    CouponsPage,
    MyreservationsPage,
    ReservationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RestaurantsPage,
    ProfilePage,
    CouponsPage,
    MyreservationsPage,
    ReservationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
