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
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
