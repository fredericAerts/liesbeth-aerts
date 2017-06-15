import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaGalleryComponent } from './la-gallery.component';

describe('LaGalleryComponent', () => {
  let component: LaGalleryComponent;
  let fixture: ComponentFixture<LaGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
