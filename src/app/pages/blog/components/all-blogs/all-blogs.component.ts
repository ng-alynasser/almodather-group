import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllBlogsComponent implements OnInit {
  blogs = [
    {
      imageUrl: '../../../../../../assets/images/blog/1.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/2.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/3.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/4.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/5.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/6.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/7.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/8.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/9.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
    {
      imageUrl: '../../../../../../assets/images/blog/10.svg',
      genre: 'LifeStyle',
      title: 'Minimalist Kitchen',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
