import { Component } from '@angular/core';

import { LaGalleryItem } from './la-gallery/la-gallery-item';
import { LaGalleryService } from './la-gallery/la-gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: LaGalleryItem[] = this._galleryService.items;
  component: any;

  constructor(private _galleryService: LaGalleryService) {}

  selectItem(component) {
    this.component = component;
  }
}
