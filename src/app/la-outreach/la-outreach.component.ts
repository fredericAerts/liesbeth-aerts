import { Component, OnInit } from '@angular/core';

import { LaOutreachService } from './la-outreach.service';

@Component({
  templateUrl: './la-outreach.component.html',
  styleUrls: ['./la-outreach.component.scss'],
  providers: [
    LaOutreachService
  ]
})
export class LaOutreachComponent implements OnInit {
  items: any = [];
  filteredItems: any = [];
  itemFilterProps = ['audience', 'medium'];
  errorMessage: string;

  constructor(private outreachService: LaOutreachService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.outreachService.getItems()
                     .subscribe(
                       items => this.items = this.filteredItems = items,
                       error =>  this.errorMessage = <any>error);
  }

  filterItems(params) {

    if (!params.length) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => {
        let filteredOut = false;
        params.forEach(curr => {
          const param = curr.split(':');
          if (item[param[0]] !== param[1]) {
            filteredOut = true;
          }
        });

        return !filteredOut;
      });
    }
  }
}
