import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/interfaces/contact';
import { Profile } from 'src/interfaces/profile';
import { ProfileService } from 'src/services/profile/profile.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent implements OnInit {
  profileData!: Profile;

  constructor(
    private profileService: ProfileService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.showContacts();
  }

  showContacts() {
    this.profileService.getProfile().subscribe((data) => {
      this.profileData = data;
      this.cdr.markForCheck();
    });
  }
}
