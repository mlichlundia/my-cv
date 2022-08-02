import { ChangeDetectionStrategy, Component } from '@angular/core';
import SwiperCore, { Mousewheel, Pagination } from 'swiper';

SwiperCore.use([Mousewheel, Pagination]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
