import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VillePage } from '../pages/list/list';
import { ListVillePage } from '../pages/list-ville/list-ville';
import { TabsPage } from '../pages/tabs/tabs';

import { Horloge } from '../pages/horloge/horloge';
import { Chrono } from '../pages/chrono/chrono';
import { Minuteur } from '../pages/minuteur/minuteur';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VillePage,
    TabsPage,
    ContactPage,
    Horloge,
    Chrono,
    Minuteur,
    ListVillePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VillePage,
    TabsPage,
    ContactPage,
    Horloge,
    Chrono,
    Minuteur,
    ListVillePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
