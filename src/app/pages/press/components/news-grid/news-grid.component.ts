import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsGridComponent implements OnInit {
  news = [
    {
      imageUrl: '../../../../../assets/images/press/1.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      featured: false,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      featured: false,
    },
    {
      imageUrl: '../../../../../assets/images/press/4.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/5.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/6.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/7.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      featured: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
