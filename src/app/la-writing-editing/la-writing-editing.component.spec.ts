import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaWritingEditingComponent } from './la-writing-editing.component';

describe('LaWritingEditingComponent', () => {
  let component: LaWritingEditingComponent;
  let fixture: ComponentFixture<LaWritingEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaWritingEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaWritingEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
