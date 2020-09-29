import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent {
  constructor() {}
}
