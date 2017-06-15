import { TestBed, inject } from '@angular/core/testing';

import { LaGalleryService } from './la-gallery.service';

describe('LaGalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaGalleryService]
    });
  });

  it('should be created', inject([LaGalleryService], (service: LaGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
