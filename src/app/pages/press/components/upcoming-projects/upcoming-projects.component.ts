import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upcoming-projects',
  templateUrl: './upcoming-projects.component.html',
  styleUrls: ['./upcoming-projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
