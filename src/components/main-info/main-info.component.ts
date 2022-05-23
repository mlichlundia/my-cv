import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss'],
})
export class MainInfoComponent implements OnInit {
  profileInfo = {
    name: 'Ksenia Sychova',
    profession: 'Junior Frontend Developer',
    summary: [
      'I`m a Junior Frontend Developer. I started to learn frontend development with my mentor. I think such way of learning helps me to understand more about working in company and also in a team. Our mentoring program increases my knowledge with the most important and modern Frontend technologies.',
      'I am looking for a company that will give me friendly enviroment in which i will increase my knowledge in creating large-scale applications.',
    ],
  };

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.showProfile();
  }

  showProfile() {
    this.profileService.getProfile().subscribe((data) => {
      this.profileInfo.name = data.name;
    });
  }
}
