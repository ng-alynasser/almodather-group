import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { LayoutFooterComponent } from './components/layout/layout-footer.component';
import { LayoutHeaderComponent } from './components/layout/layout-header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { buildIconLibrary } from './icon-library';
import { NavComponent } from './components/nav/nav.component';
import { HomeModule } from '../pages/home/home.module';
import { FooterComponent } from './components/footer/footer.component';

const CORE_COMPONENTS = [
  LayoutComponent,
  LayoutFooterComponent,
  LayoutHeaderComponent,
  FooterComponent,
  NavComponent,
];

@NgModule({
  declarations: [...CORE_COMPONENTS, NavComponent, FooterComponent],
  imports: [SharedModule, BrowserModule, HomeModule],
  exports: [...CORE_COMPONENTS],
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    buildIconLibrary(library);
  }
}
