import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaResearchComponent } from './la-research.component';

describe('LaResearchComponent', () => {
  let component: LaResearchComponent;
  let fixture: ComponentFixture<LaResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
