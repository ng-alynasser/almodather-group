import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { buildIconLibrary } from './icon-library';
import { NavComponent } from './components/nav/nav.component';
import { HomeModule } from '../pages/home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';

const CORE_COMPONENTS = [FooterComponent, NavComponent, NavMobileComponent];

@NgModule({
  declarations: [
    ...CORE_COMPONENTS,
    NavComponent,
    FooterComponent,
    NavMobileComponent,
  ],
  imports: [SharedModule, BrowserModule, HomeModule],
  exports: [...CORE_COMPONENTS],
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    buildIconLibrary(library);
  }
}
