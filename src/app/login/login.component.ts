import { Component, Injectable } from '@angular/core';
import { BackendaccessService } from '../backendaccess.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {
   data:any[]=[];
   num:number=1;

  constructor( private backendaccessService:BackendaccessService,private router:Router,private app:AppComponent){
  }

 
  checkUser(userform :any){
    this.data=this.backendaccessService.checkUser(userform);
    this.data=this.backendaccessService.checkUser(userform);
    if(this.data.length==0 ){
      alert("Invalid User")
    }
    else{
      console.log(this.data);
      console.log("Else Block");
      sessionStorage.setItem("logged","true");
      this.data=[];
      sessionStorage.setItem("username",userform.value.username);
       this.router.navigate(['']);
      
    }

  }
  ngOnInit(){
      var div1=document.getElementById("div1");
     div1!=null?div1.style.visibility="hidden":null;
     sessionStorage.setItem('logged',"false");
      console.log("Hi log");
  }

   Log(){
  }

}
