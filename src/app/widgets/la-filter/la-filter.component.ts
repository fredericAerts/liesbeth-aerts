import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { LaCard } from '../la-card/la-card';

@Component({
  selector: 'la-filter',
  templateUrl: './la-filter.component.html',
  styleUrls: ['./la-filter.component.scss']
})
export class LaFilterComponent implements OnChanges {
  @Input() items: LaCard[];
  @Input() filterProps: string[];
  @Output() onFilter = new EventEmitter<string[]>();
  filters = {};
  filterParams: string[] = [];
  isDropdownOpen = false;

  constructor() { }

  ngOnChanges() {
    this.filterProps.forEach((filterProp) => {
      this.filters[filterProp] = Array.from(new Set(this.items.map((item) => item[filterProp]))).map((filter: string) => ({
        isActive: false,
        filterValue: filter
      }));
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  filterItems(filterProp, filter) {
    this.filters[filterProp].map(currFilter => {
      currFilter.isActive = currFilter === filter ? !currFilter.isActive : false;

      return currFilter;
    });

    this.emitFilterValues();
  }

  emitFilterValues() {
    this.filterParams = [];
    this.filterProps.forEach((filterProp) => {
      const activeFilter = this.filters[filterProp].find(filter => filter.isActive);

      if (activeFilter) {
        this.filterParams.push(`${filterProp}:${activeFilter.filterValue}`);
      }
    });

    this.onFilter.emit(this.filterParams);
  }
}
