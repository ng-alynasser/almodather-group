import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogsHeaderComponent } from './components/blogs-header/blogs-header.component';
import { BlogsCardComponent } from './components/blogs-card/blogs-card.component';

@NgModule({
  declarations: [BlogComponent, BlogsHeaderComponent, BlogsCardComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
