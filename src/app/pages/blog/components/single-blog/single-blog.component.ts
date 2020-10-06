import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
