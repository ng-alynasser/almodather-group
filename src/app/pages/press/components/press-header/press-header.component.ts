import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-press-header',
  templateUrl: './press-header.component.html',
  styleUrls: ['./press-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PressHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
