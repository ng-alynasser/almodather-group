import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-projects-header',
  templateUrl: './projects-header.component.html',
  styleUrls: ['./projects-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsHeaderComponent implements OnInit {
  options: SwiperConfigInterface = {
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      1500: {
        slidesPerView: 1,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
