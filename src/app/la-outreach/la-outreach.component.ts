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
  test: string;
  errorMessage: string;

  constructor(private outreachService: LaOutreachService) { }

  ngOnInit() {
    this.getTest();
  }

  getTest() {
    this.outreachService.test()
                     .subscribe(
                       testValue => this.test = testValue,
                       error =>  this.errorMessage = <any>error);
  }

}
