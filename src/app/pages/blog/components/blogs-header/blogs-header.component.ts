import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blogs-header',
  templateUrl: './blogs-header.component.html',
  styleUrls: ['./blogs-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
