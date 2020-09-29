import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent {
  options: SwiperConfigInterface = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1500: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  };
  constructor() {}
}
