import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
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
    private _profileService: ProfileService,
    private __cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.showContacts();
  }

  showContacts() {
    this._profileService.getProfile().subscribe((data) => {
      this.profileData = data;
      this.__cdr.markForCheck();
    });
  }
}
