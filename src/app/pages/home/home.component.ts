import { Component, OnInit, ViewChild } from '@angular/core';
import { contactDto } from 'src/app/shared/models/contact.model';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  @ViewChild('cmpContactList') contactList!: ContactListComponent;
  ngOnInit(): void {}
  getEmittedItem(item: contactDto) {
    // console.log(`recived item is:${item}`);
    console.log('recived item is', item);
    this.contactList.addRow(item);
  }
}
