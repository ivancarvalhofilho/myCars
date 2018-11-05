import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VeiculosApiProvider } from '../providers/veiculos-api/veiculos-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsPage } from '../pages/details/details';
import { CommentPage } from '../pages/comment/comment';
import { RestProvider } from '../providers/rest/rest';
import { RestApiProvider } from '../providers/rest-api/rest-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    CommentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    VeiculosApiProvider,
    RestProvider,
    RestApiProvider
  ]
})
export class AppModule {}
