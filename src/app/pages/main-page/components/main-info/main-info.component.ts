import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Profile } from 'src/interfaces/profile';
import { ProfileService } from 'src/services/profile/profile.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainInfoComponent implements OnInit {
  profileData!: Profile;

  constructor(
    private _profileService: ProfileService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.showProfile();
  }

  showProfile() {
    this._profileService.getProfile().subscribe((data) => {
      this.profileData = data;
      this._cdr.markForCheck();
    });
  }
}
