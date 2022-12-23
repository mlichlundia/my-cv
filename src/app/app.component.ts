import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProfileService} from "./modules/shared/services/profile/profile.service";

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
    this.profileService.getProfile().subscribe(res => this.profileService.profile = res);
  }
}
