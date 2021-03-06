import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  options: SwiperConfigInterface = {
    speed: 1000,
    spaceBetween: 10,
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
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 4,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
