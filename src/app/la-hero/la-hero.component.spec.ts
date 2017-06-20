import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaHeroComponent } from './la-hero.component';

describe('LaHeroComponent', () => {
  let component: LaHeroComponent;
  let fixture: ComponentFixture<LaHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
