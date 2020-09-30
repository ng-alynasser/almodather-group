import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressRoutingModule } from './press-routing.module';
import { PressComponent } from './press.component';
import { PressCardComponent } from './components/press-card/press-card.component';
import { PressHeaderComponent } from './components/press-header/press-header.component';

@NgModule({
  declarations: [PressComponent, PressHeaderComponent, PressCardComponent],
  imports: [CommonModule, PressRoutingModule],
})
export class PressModule {}
