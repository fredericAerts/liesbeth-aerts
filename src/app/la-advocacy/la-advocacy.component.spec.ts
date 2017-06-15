import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaAdvocacyComponent } from './la-advocacy.component';

describe('LaAdvocacyComponent', () => {
  let component: LaAdvocacyComponent;
  let fixture: ComponentFixture<LaAdvocacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaAdvocacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaAdvocacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
