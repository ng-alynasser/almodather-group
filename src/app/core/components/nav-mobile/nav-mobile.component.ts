import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../providers/state.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMobileComponent {
  @HostBinding('class.visible')
  @Input()
  visible: boolean;

  constructor(private stateService: StateService, private router: Router) {}

  close() {
    this.stateService.setState('mobileNavMenuIsOpen', false);
  }

  navigateTo(route: string) {
    this.router.navigate([`${route}`]);
    this.close();
  }
}
