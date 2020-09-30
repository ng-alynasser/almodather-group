import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PressComponent implements OnInit {
  news = [
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      description: `French far-right leader Marine Le Pen on Wednesday said she would take banking giants HSBC and Societe Generale to court.`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      description: `French far-right leader Marine Le Pen on Wednesday said she would take banking giants HSBC and Societe Generale to court.`,
      featured: false,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      description: `French far-right leader Marine Le Pen on Wednesday said she would take banking giants HSBC and Societe Generale to court.`,
      featured: false,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      description: `French far-right leader Marine Le Pen on Wednesday said she would take banking giants HSBC and Societe Generale to court.`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      description: `French far-right leader Marine Le Pen on Wednesday said she would take banking giants HSBC and Societe Generale to court.`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      description: `French far-right leader Marine Le Pen on Wednesday said she would take banking giants HSBC and Societe Generale to court.`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      description: `French far-right leader Marine Le Pen on Wednesday said she would take banking giants HSBC and Societe Generale to court.`,
      featured: true,
    },
    {
      imageUrl: '../../../../../assets/images/press/2.svg',
      title: `Le Pen slams 'banking fatwa' against National Front after accounts closed`,
      description: `French far-right leader Marine Le Pen on Wednesday said she would take banking giants HSBC and Societe Generale to court.`,
      featured: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
