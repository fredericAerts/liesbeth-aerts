import { DOCUMENT } from '@angular/platform-browser';
import { Component, Inject, ViewChild } from '@angular/core';

import { WindowRef } from './browser/window-ref.service';
import { LaGalleryComponent } from './la-gallery/la-gallery.component';
import { LaFoldingPanelComponent } from './la-folding-panel/la-folding-panel.component';
import { LaGalleryItem } from './la-gallery/la-gallery-item';
import { LaGalleryService } from './la-gallery/la-gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  window: Window;
  document: HTMLDocument;
  items: LaGalleryItem[] = this._galleryService.items;
  activeComponent: any;
  foldIsOpen: boolean = false;
  @ViewChild(LaGalleryComponent) private _galleryComponent : LaGalleryComponent;
  @ViewChild(LaFoldingPanelComponent) private _foldingPanelComponent : LaFoldingPanelComponent;

  constructor(private windowRef: WindowRef,
              @Inject(DOCUMENT) document: HTMLDocument,
              private _galleryService: LaGalleryService) {
    this.window = windowRef.nativeWindow;
    this.document = document;
  }

  selectItem(component) {
    this.activeComponent = component;
  }

  onFoldToggle(isOpen) {
    this.foldIsOpen = isOpen;

    if (isOpen) {
      this.document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => this.document.body.style.overflow = 'visible', 900);
      this.activeComponent = null;
    }
  }

  onGalleryClick(event) {
    if (this.foldIsOpen && event.target.classList.contains('la-gallery')) {
      this._foldingPanelComponent.closeFold();
    }
  }

  scrollToGallery() {
    this.windowRef.scrollTo(this._galleryComponent.elementRef.nativeElement, 600, 'easeInCubic');
  }
}
