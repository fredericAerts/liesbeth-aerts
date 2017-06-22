import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaCardComponent } from './la-card/la-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LaCardComponent
  ],
  declarations: [
    LaCardComponent
  ]
})
export class WidgetsModule { }
