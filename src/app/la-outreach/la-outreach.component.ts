import { Component, OnInit } from '@angular/core';

import { LaOutreachService } from './la-outreach.service';

@Component({
  templateUrl: './la-outreach.component.html',
  styleUrls: ['./la-outreach.component.scss'],
  providers: [
    LaOutreachService
  ],
})
export class LaOutreachComponent implements OnInit {
  items: any = [];
  errorMessage: string;

  constructor(private outreachService: LaOutreachService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.outreachService.getItems()
                     .subscribe(
                       items => this.items = items,
                       error =>  this.errorMessage = <any>error);
  }

}
