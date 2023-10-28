import { Component } from '@angular/core';
import { BackendaccessService } from '../backendaccess.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactsList:any=[];
  data:any;
  userForm:any;

     constructor(private backendaccessService: BackendaccessService) {
       
     }
     
     getContacts() {
    this.contactsList=this.backendaccessService.getAllContacts();
   console.log(this.contactsList);
  }
  addContact(userForm:any) {
    this.backendaccessService.addContact(userForm);
  }
  updateContact(userForm:any) {
    this.backendaccessService.updateContact(userForm);
  }
  deleteContact(userForm:any) {
    this.backendaccessService.deleteContact(userForm);
  }
}
