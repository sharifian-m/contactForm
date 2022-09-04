import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { contactDto } from '../../shared/models/contact.model';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  @Output('emittedItem') itemForEmit = new EventEmitter<contactDto>();
  constructor(protected fb: FormBuilder) {}

  ngOnInit(): void {}

  myForm = this.fb.group({
    ID: [],
    FullName: [],
    Mobile: [],
  });
  submit() {
    let contact: contactDto = {
      // ID: +this.myForm.controls['ID'],
      ID: +this.myForm.value.ID,
      // FullName: this.myForm.get('FullName')?.value,
      FullName: this.myForm.value.FullName,
      Mobile: this.myForm.value.Mobile,
    };
    // let contact :contactDto=this.myForm.value;
    this.itemForEmit.emit(contact);
    // contact.ID = Number(this.myForm.value.ID);
    // contact.FullName = this.myForm.value.FullName;
    // contact.Mobile = this.myForm.value.Mobile;
    //TODO: اطلاعات فرم در قابل یک آبجکت
    //    event  با استفاده از
    //    به کامپوننت  لیست ارسال گردد

    this.myForm.reset();
  }
}
