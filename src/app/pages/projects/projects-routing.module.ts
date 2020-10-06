import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';

import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: AllProjectsComponent },
  { path: 'single-project', component: SingleProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
