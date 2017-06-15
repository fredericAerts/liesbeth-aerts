import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFoldingPanelComponent } from './la-folding-panel.component';

describe('LaFoldingPanelComponent', () => {
  let component: LaFoldingPanelComponent;
  let fixture: ComponentFixture<LaFoldingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaFoldingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaFoldingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
