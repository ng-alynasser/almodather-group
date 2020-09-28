import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './core/providers/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navMenuVisible$: Observable<boolean>;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.navMenuVisible$ = this.stateService.select(
      (state) => state.mobileNavMenuIsOpen
    );
  }
}
