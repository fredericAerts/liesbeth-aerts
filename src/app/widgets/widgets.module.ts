import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaCardComponent } from './la-card/la-card.component';
import { LaFilterComponent } from './la-filter/la-filter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    LaCardComponent,
    LaFilterComponent,
  ],
  declarations: [
    LaCardComponent,
    LaFilterComponent,
  ]
})
export class WidgetsModule { }
