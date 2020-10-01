import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressRoutingModule } from './press-routing.module';
import { PressComponent } from './press.component';
import { PressCardComponent } from './components/press-card/press-card.component';
import { PressHeaderComponent } from './components/press-header/press-header.component';
import { NewsGridComponent } from './components/news-grid/news-grid.component';
import { UpcomingProjectsComponent } from './components/upcoming-projects/upcoming-projects.component';
import { MostReadComponent } from './components/most-read/most-read.component';

@NgModule({
  declarations: [
    PressComponent,
    PressHeaderComponent,
    PressCardComponent,
    NewsGridComponent,
    UpcomingProjectsComponent,
    MostReadComponent,
  ],
  imports: [CommonModule, PressRoutingModule],
})
export class PressModule {}
