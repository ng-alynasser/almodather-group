import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { bufferTime, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-layout-header',
  template: `<div class="floating-container" #floatingContainer>
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHeaderComponent {}
