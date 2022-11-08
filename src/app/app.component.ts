import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProfileService} from "./modules/shared/services/profile/profile.service";
import {Profile} from "../interfaces/profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  public isMenuOpen!: boolean

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile()
        .subscribe((res:Profile) => this.profileService.profile = res);
  }
}
