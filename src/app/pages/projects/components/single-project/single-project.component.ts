import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
