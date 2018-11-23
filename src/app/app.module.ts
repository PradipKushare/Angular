import '../polyfills';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
// library.add(faCoffee);


import { NgModule } from '@angular/core';


//custom imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoShowComponent } from './info-show/info-show.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoShowComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,MatNativeDateModule,AngularFontAwesomeModule
],
  //  entryComponents: [HomeComponent],

   entryComponents: [SignupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
