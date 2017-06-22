import { Component, Input } from '@angular/core';

import { LaCard } from './la-card';

@Component({
  selector: 'la-card',
  templateUrl: './la-card.component.html',
  styleUrls: ['./la-card.component.scss']
})
export class LaCardComponent {
  @Input() item: LaCard;

  constructor() { }
}
