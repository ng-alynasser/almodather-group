import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-most-read',
  templateUrl: './most-read.component.html',
  styleUrls: ['./most-read.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MostReadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
