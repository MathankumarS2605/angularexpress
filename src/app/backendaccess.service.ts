import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendaccessService {
  userList:any=[];
  contactList:any=[];
  data:any;
  username:string="";
  password:string="";
  getUserList:any=[];
  email:string="";

  constructor(private httpClient: HttpClient) {
    

  }
   getUsers(){
    this.httpClient.get('http://localhost:8080/getAllUser').subscribe(data => {
      this.userList = data;
    })
    return this.userList;
  }

  addUser(userForm:any){
    this.httpClient.post('http://localhost:8080/insertUser',userForm.value).subscribe(data => {
      this.data = data;
    })
    return (this.data);
  }

  updateUser(userForm:any){
    console.log(userForm.value);
    this.httpClient.post('http://localhost:8080/updateUser',userForm.value).subscribe(data => {
      console.log(data);
    })
  }
  deleteUser(userForm:any){
    this.httpClient.delete(`http://localhost:8080/deleteUser?username=${userForm.value.username}`).subscribe(data => {
      console.log(data);
    })
  }
  getUser(userForm:any){
    this.httpClient.get(`http://localhost:8080/getUserById?uid=${userForm.value.username}`).subscribe(data => {
      this.getUserList=data;
      this.username=this.getUserList[0].UserName;
      this.password=this.getUserList[0].Password;
      this.email=this.getUserList[0].emailId;
    })

}

  getAllContacts(){
    this.httpClient.get('http://localhost:8080/getContacts').subscribe(data => {
      this.contactList = data;
    })
    return this.contactList;
  }
  addContact(userForm:any){
    this.httpClient.post('http://localhost:8080/addContact',userForm.value).subscribe(data => {
      this.data = data;
    })
    return (this.data);
  }
  updateContact(userForm:any){
    this.httpClient.put('http://localhost:8080/updateContact',userForm.value).subscribe(data => {
      this.data = data;
    })
  }
  deleteContact(userForm:any){
    this.httpClient.delete(`http://localhost:8080/deleteContact?firstname=${userForm.value.firstname}`).subscribe(data => {
      console.log(data);
    })
  }

  checkUser(userform:any){
    this.httpClient.get(`http://localhost:8080/checkUser?username=${userform.value.username}&password=${userform.value.password}`).subscribe(data => {
      this.data = data;
    })
    return (this.data);
  }
}
