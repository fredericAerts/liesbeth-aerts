import { Component, EventEmitter, Input, Output, ElementRef } from '@angular/core';

import { LaGalleryItem } from './la-gallery-item';

@Component({
  selector: 'la-gallery',
  templateUrl: './la-gallery.component.html',
  styleUrls: ['./la-gallery.component.scss']
})
export class LaGalleryComponent {
  @Input() items: LaGalleryItem[];
  @Output() onSelect = new EventEmitter<any>();

  constructor(public elementRef: ElementRef) { }

  selectItem(item) {
    this.onSelect.emit(item.component);
  }
}
