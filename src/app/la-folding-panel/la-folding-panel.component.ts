import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { LaFoldingPanelHostDirective } from './la-folding-panel-host.directive';

@Component({
  selector: 'la-folding-panel',
  templateUrl: './la-folding-panel.component.html',
  styleUrls: ['./la-folding-panel.component.scss']
})
export class LaFoldingPanelComponent implements OnChanges {
  @Input() component;
  @Output() onToggle = new EventEmitter<boolean>();
  @ViewChild(LaFoldingPanelHostDirective) contentHost: LaFoldingPanelHostDirective;
  componentRef: ComponentRef<Component>;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  // Fold is triggered when new Input component is set
  ngOnChanges(changes: SimpleChanges) {
    if (this.component) {
      this.openFold(this.component);
    }
  }

  openFold(component) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);

    setTimeout(() => this.componentRef.location.nativeElement.classList.add('is-open'), 10);

    this.onToggle.emit(true);
  }

  closeFold() {
    this.componentRef.location.nativeElement.classList.remove('is-open');
    this.onToggle.emit(false);
  }
}
