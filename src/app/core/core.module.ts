import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { buildIconLibrary } from './icon-library';
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';

import { NavComponent } from './components/nav/nav.component';
import { HomeModule } from '../pages/home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';

const CORE_COMPONENTS = [FooterComponent, NavComponent, NavMobileComponent];

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  slidesPerView: 4,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
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
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
};

@NgModule({
  declarations: [
    ...CORE_COMPONENTS,
    NavComponent,
    FooterComponent,
    NavMobileComponent,
  ],
  imports: [SharedModule, BrowserModule, HomeModule, SwiperModule],
  exports: [...CORE_COMPONENTS],
  providers: [{ provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }],
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    buildIconLibrary(library);
  }
}
