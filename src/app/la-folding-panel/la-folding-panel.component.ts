import { Component, OnChanges, SimpleChanges, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { LaFoldingPanelHostDirective } from './la-folding-panel-host.directive';

@Component({
  selector: 'la-folding-panel',
  templateUrl: './la-folding-panel.component.html',
  styleUrls: ['./la-folding-panel.component.scss']
})
export class LaFoldingPanelComponent implements OnChanges {
  @Input() component;
  @ViewChild(LaFoldingPanelHostDirective) contentHost: LaFoldingPanelHostDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.component) {
      this.loadComponent(this.component);
    }
  }

  loadComponent(component) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
