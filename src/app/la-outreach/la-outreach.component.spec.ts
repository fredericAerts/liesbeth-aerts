import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaOutreachComponent } from './la-outreach.component';

describe('LaOutreachComponent', () => {
  let component: LaOutreachComponent;
  let fixture: ComponentFixture<LaOutreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaOutreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
