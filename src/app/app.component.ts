import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from "./modules/shared/services/profile/profile.service";
import {startRender, stopRender, subscribeMouse, unsubscribeMouse} from "./textura-renderer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy{
  public isMenuOpen!: boolean

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    startRender()
    subscribeMouse()

    this.profileService.getProfile().subscribe(res => this.profileService.profile = res);
  }

  ngOnDestroy(): void {
    stopRender()
    unsubscribeMouse()
  }
}
