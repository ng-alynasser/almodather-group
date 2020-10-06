import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogsHeaderComponent } from './components/blogs-header/blogs-header.component';
import { BlogsCardComponent } from './components/blogs-card/blogs-card.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { AllBlogsComponent } from './components/all-blogs/all-blogs.component';

@NgModule({
  declarations: [BlogComponent, BlogsHeaderComponent, BlogsCardComponent, SingleBlogComponent, AllBlogsComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
