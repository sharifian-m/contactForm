import { contactDto } from '../../core/models/contact.model';
import {
  Component,
  Injectable,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../core/servises/contact.service';
import { ContactSummeryComponent } from '../contact-summery/contact-summery.component';

//  @Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit, AfterViewInit {
  Contacts: contactDto[] = [];
  ContactsList: contactDto[] =[];
  
@Input() item!:contactDto;
@Output() editItem=new EventEmitter<contactDto>();
filterstring:string='';
  constructor(private contactservice: ContactService) {}
  ngAfterViewInit(): void {
    // this.Contacts.push(new contactDto({ FullName: 'Seamorgh', ID: 1, Mobile: '02122050495' }));
    //TODO: Set contactService value with this.Contacts.length
  }

  ngOnInit(): void {}

  addRow(contact: contactDto) {
    // this.Contacts.push(contact);OR=>
    this.Contacts= [...this.Contacts,contact];
    console.log(' this.Contacts Array=',this.Contacts);
    this.contactCount();
    this.ContactsList= [...this.Contacts];
    //TODO: Set contactService value with this.Contacts.length
  }
  deleteRow(contact: contactDto) {
    console.log('contact id=', contact.ID);
    this.Contacts.splice(contact.ID-1, 1);
    console.log('Contacts Array=', this.Contacts);
    this.contactCount();
    //TODO: Set contactService value with this.Contacts.length
  }
  contactCount() {
    this.contactservice.changeContact(this.Contacts.length);
  }

}
