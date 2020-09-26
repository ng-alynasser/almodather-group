import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

const IMPORTED_MODULES = [
  CommonModule,
  FontAwesomeModule,
  FormsModule,
  ReactiveFormsModule,
  OverlayModule,
  RouterModule,
];

@NgModule({
  declarations: [],
  imports: [...IMPORTED_MODULES],
  exports: [...IMPORTED_MODULES],
})
export class SharedModule {}
