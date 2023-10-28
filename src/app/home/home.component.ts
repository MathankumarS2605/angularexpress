import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendaccessService} from '.././backendaccess.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angularforms';
  userList:any=[];
  getUserList:any=[];
  data:any;
  username:string="";
  password:string="";
  email:string="";
  n:number=0;
  s:string="";
 
  constructor( private backendaccessService: BackendaccessService,private router:Router) {
  }
  getUsers(){
    this.n=this.n+1;
    sessionStorage.setItem('n', this.n.toString());
    this.userList=this.backendaccessService.getUsers();    
  }

  addUser(userForm:any){
    this.data=this.backendaccessService.addUser(userForm);
    var b=document.getElementById("b");

    this.data!=null && b!=null ? b.innerHTML="User Added" : null;

  }

  updateUser(userForm:any){
    this.backendaccessService.updateUser(userForm);
  }

  deleteUser(userForm:any){
    this.backendaccessService.deleteUser(userForm);
  }
  getUser(userForm:any){
    this.backendaccessService.getUser(userForm);
  }
  
//Http client and http client module 
//component life cycle 
//Update


}
