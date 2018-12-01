import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsPage } from '../pages/details/details';
import { CommentPage } from '../pages/comment/comment';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { CadastroContaPage } from '../pages/cadastro-conta/cadastro-conta';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DetailsPage,
    CadastroContaPage,
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
    LoginPage,
    DetailsPage,
    CadastroContaPage,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    RestApiProvider
  ]
})
export class AppModule {}
