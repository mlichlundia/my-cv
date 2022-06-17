import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Mousewheel, Pagination } from 'swiper';

SwiperCore.use([Mousewheel, Pagination]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
