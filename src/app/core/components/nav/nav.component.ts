import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StateService } from '../../providers/state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  constructor(private stateService: StateService) {}

  toggleOn() {
    this.stateService.setState('mobileNavMenuIsOpen', true);
  }
}
