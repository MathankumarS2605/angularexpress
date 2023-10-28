import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BackendaccessService } from './backendaccess.service';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn:boolean=false;
  username:any="";
 
  constructor(private router: Router,private backendaccessService:BackendaccessService){
    
  }
  ngOnInit(){
   
    
    if(window.location.pathname !="http://localhost:4200/" && window.location.pathname !="http://localhost:4200/registration" && window.location.pathname !="http://localhost:4200/aboutus" && window.location.pathname !="http://localhost:4200/contactus" && sessionStorage.getItem('logged')=="false"){
      this.router.navigate(['login']);
    }
    console.log("Hi init");
    if(sessionStorage.getItem('logged')=="true"){
      this.username=sessionStorage.getItem('username');
      var div=document.getElementById("div1");
      div!=null?div.style.visibility="visible":null;
    }
    else{
      this.router.navigate(['login']);
    }
  }
    logout(){
      sessionStorage.setItem('logged',"false");
      alert("Bye You are logging out");
      this.router.navigate(['login']);
    }
    ngOnDestroy(){
      this.username = [];
    }
}

//Http client and http client module 
//component life cycle 
//Update

