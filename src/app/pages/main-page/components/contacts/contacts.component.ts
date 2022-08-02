import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/interfaces/contact';
import { Profile } from 'src/interfaces/profile';
import { ProfileService } from 'src/services/profile/profile.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  profileData: Profile = {
    name: '',
    location: '',
    contacts: [
      {
        type: '',
        value: '',
      },
    ],
    profileImg: '',
  };

  isEditable: boolean = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.showContacts();
  }

  showContacts() {
    this.profileService.getProfile().subscribe((data) => {
      this.profileData = data;
    });
  }

  onPush(form: NgForm, event: Event) {
    event.preventDefault();

    for (let val of Object.values(form.value)) {
      if (val === '') {
        return;
      }
    }

    const updatedContacts = this.profileData.contacts
      ? [...this.profileData.contacts, form.value]
      : [form.value];

    this.updateContacts(updatedContacts);

    form.reset();
  }

  onDelete(data: Contact) {
    const updatedContacts =
      this.profileData.contacts &&
      this.profileData.contacts.filter((item) => item.value !== data.value);

    this.updateContacts(updatedContacts);
  }

  updateContacts(contacts: Contact[] | undefined) {
    this.profileData = { ...this.profileData, contacts: contacts };
    this.profileService
      .setData(this.profileData)
      .subscribe((message) => console.log(message));
  }
}
