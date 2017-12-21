import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ItemDetails } from '../pages/item-details/item-details';
import { CountryPage } from '../pages/country/country';
import { CountryDetailsPage } from '../pages/country-details/country-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ItemDetails,
    CountryPage,
    CountryDetailsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ItemDetails,
    CountryPage,
    CountryDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    MessageService
  ]
})
export class AppModule {}
