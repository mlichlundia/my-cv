import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/services/profile/profile.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss'],
})
export class MainInfoComponent implements OnInit {
  profileInfo = {
    name: '',
    profession: 'Junior Frontend Developer',
    summary: [
      'I`m a Junior Frontend Developer. I started to learn frontend development with my mentor. I think such way of learning helps me to understand more about working in company and also in a team. Our mentoring program increases my knowledge with the most important and modern Frontend technologies.',
      'I am looking for a company that will give me friendly enviroment in which i will increase my knowledge in creating large-scale applications.',
    ],
  };

  isEditable: boolean = false;
  hasError: boolean = false;

  currentName: string = '';
  currentClasses: Record<string, boolean> = {};

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.showProfile();
  }

  showProfile() {
    this.profileService.getProfile().subscribe((data) => {
      this.profileInfo.name = data.name;
    });
  }

  setCurrentClasses() {
    this.currentClasses = {
      profile__input_visible: this.isEditable,
      profile__input_error: this.hasError,
    };
  }

  onEdit(): void {
    this.isEditable = true;
    this.setCurrentClasses();

    this.currentName = this.profileInfo.name;
  }

  onSave(isValid: boolean | null): void {
    this.isEditable = false;

    //check if name is invalid
    if (!isValid) {
      this.hasError = true;
      this.setCurrentClasses();
      return;
    }
    this.hasError = false;

    this.setCurrentClasses();

    //check if name was changed
    if (this.currentName === this.profileInfo.name) {
      return;
    }

    //make request
    this.profileService
      .setName(this.profileInfo.name)
      .subscribe((message) => console.log(message));
  }
}
