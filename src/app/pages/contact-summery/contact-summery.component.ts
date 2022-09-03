import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-summery',
  templateUrl: './contact-summery.component.html',
  styleUrls: ['./contact-summery.component.css']
})
export class ContactSummeryComponent implements OnInit {
  @ViewChild('cmpContactList') contactList!:ContactListComponent;
  constructor(
    public contactservice:ContactService
  ) { }
  CountOfContacts: number = 0;
  ngOnInit(): void {

    // TODO: Set value with subscribe contactService
    // this.contactservice.contactValueUpdate.subscribe((x)=> this.CountOfContacts=x);
    // console.log('CountOfContacts' ,this.CountOfContacts);
    
  }

}
