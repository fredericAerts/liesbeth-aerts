import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[la-folding-panel-host]'
})
export class LaFoldingPanelHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
