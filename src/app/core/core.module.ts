import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { LayoutFooterComponent } from './components/layout/layout-footer.component';
import { LayoutHeaderComponent } from './components/layout/layout-header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { buildIconLibrary } from './icon-library';

const CORE_COMPONENTS = [
  LayoutComponent,
  LayoutFooterComponent,
  LayoutHeaderComponent,
];

@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [SharedModule, BrowserModule],
  exports: [...CORE_COMPONENTS],
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    buildIconLibrary(library);
  }
}
