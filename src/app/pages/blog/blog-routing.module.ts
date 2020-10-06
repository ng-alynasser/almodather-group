import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBlogsComponent } from './components/all-blogs/all-blogs.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';

const routes: Routes = [
  { path: '', component: AllBlogsComponent },
  { path: 'single-blog', component: SingleBlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
