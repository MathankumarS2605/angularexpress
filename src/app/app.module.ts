import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink,RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  //Sequence of loading the componenets
  bootstrap: [AppComponent]
})
export class AppModule { }
