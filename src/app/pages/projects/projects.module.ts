import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ProjectsHeaderComponent } from './components/projects-header/projects-header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsHeaderComponent,
    ProjectCardComponent,
    SingleProjectComponent,
    AllProjectsComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, SwiperModule],
})
export class ProjectsModule {}
