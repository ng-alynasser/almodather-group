import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StateService } from '../../providers/state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  constructor(private stateService: StateService) {}

  ngOnInit(): void {}

  toggle() {
    this.stateService.setState('mobileNavMenuIsOpen', true);
  }
}
