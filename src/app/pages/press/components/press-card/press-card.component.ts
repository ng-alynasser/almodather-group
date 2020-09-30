import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-press-card',
  templateUrl: './press-card.component.html',
  styleUrls: ['./press-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PressCardComponent implements OnInit {
  @Input() pressInfo: {
    imageUrl: string;
    title: string;
    description: string;
    featured: boolean;
  };
  constructor() {}

  ngOnInit(): void {}
}
