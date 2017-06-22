import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFilterComponent } from './la-filter.component';

describe('LaFilterComponent', () => {
  let component: LaFilterComponent;
  let fixture: ComponentFixture<LaFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
