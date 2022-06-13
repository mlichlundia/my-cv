import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/services/profile/profile.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss'],
})
export class MainInfoComponent implements OnInit {
  username: string = '';

  isEditable: boolean = false;
  hasError: boolean = false;

  currentNameame: string = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.showProfile();
  }

  showProfile() {
    this.profileService.getProfile().subscribe((data) => {
      this.username = data.name;
    });
  }

  onEdit(): void {
    this.isEditable = true;
    this.currentNameame = this.username;
  }

  onSave(valid: boolean | null): void {
    this.isEditable = false;
    this.isValid(valid);

    //check if username was changed
    if (this.currentNameame === this.username) {
      return;
    }

    //make request
    this.profileService
      .setName(this.username)
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
