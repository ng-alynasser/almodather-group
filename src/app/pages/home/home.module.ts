import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { AboutComponent } from './components/about/about.component';
import { MembersComponent } from './components/members/members.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductsSectionComponent,
    AboutComponent,
    MembersComponent,
    FormComponent,
  ],
  imports: [SharedModule],
})
export class HomeModule {}
