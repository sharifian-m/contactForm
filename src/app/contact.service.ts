import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contactValue: number = 0;
  contactValueUpdate = new Subject<number>();

  constructor() {}

  changeContact(sendValue: number) {
    this.contactValueUpdate.next(sendValue);
  }

  changeContactCountListener() {
    return this.contactValueUpdate.asObservable();
  }
}
