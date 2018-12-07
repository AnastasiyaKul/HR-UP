import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  phone  = '';
  mail  = '';
  otherContacts  = '';

  getPhoneFromInput(inputText: string) {
    this.phone = inputText;
  }

  getMailFromInput(inputText: string) {
    this.mail = inputText;
  }

  getOtherContactsFromInput(inputText: string) {
    this.otherContacts = inputText;
  }
}
