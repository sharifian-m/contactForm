import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { contactDto } from './core/models/contact.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './core/servises/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'seamorgh-sample';
  /**
   *
   */
  @ViewChild('cmpContactList') contactList!: ContactListComponent;

  constructor(private authService:AuthService) {}
  // Contact_FormSubmit(contact: contactDto) {
    //alert(contact.FullName);
    //  this.contactList.addRow(contact)
  // }
  ngOnInit()  {
    if(this.authService.checkUserAuth()) {
      let user=localStorage.getItem('currentuseremail');
      this.authService.setUserAuth(user);
    }
  }
  getEmittedItem(item: contactDto) {
    // console.log(`recived item is:${item}`);
    console.log('recived item is', item);
    
    this.contactList.addRow(item);
  }
}
