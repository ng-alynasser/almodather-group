import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-blogs-card',
  templateUrl: './blogs-card.component.html',
  styleUrls: ['./blogs-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsCardComponent implements OnInit {
  @Input() blog: {
    imageUrl: string;
    genre: string;
    title: string;
    description: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
