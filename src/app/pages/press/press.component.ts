import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PressComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
