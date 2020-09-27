import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
