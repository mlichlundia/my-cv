import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/interfaces/profile';
import { ProfileService } from 'src/services/profile/profile.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss'],
})
export class MainInfoComponent implements OnInit {
  profileData: Profile = {
    name: '',
    location: '',
    contacts: [{ type: '', value: '' }],
    profileImg: '',
  };

  isEditable: boolean = false;
  hasError: boolean = false;

  currentName: string = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.showProfile();
  }

  showProfile() {
    this.profileService.getProfile().subscribe((data) => {
      this.profileData = data;
    });
  }

  onEdit(): void {
    this.isEditable = true;
    this.currentName = this.profileData.name;
  }

  onSave(valid: boolean | null): void {
    this.isEditable = false;
    this.isValid(valid);

    //check if username was changed
    if (this.currentName === this.profileData.name) {
      return;
    }

    //make request
    this.profileService
      .setData(this.profileData)
      .subscribe((message) => console.log(message));
  }

  isValid(valid: boolean | null) {
    if (!valid) {
      this.hasError = true;
      return;
    } else {
      this.hasError = false;
    }
  }
}
