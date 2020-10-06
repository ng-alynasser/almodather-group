import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
