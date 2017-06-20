import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'la-hero',
  templateUrl: './la-hero.component.html',
  styleUrls: ['./la-hero.component.scss']
})
export class LaHeroComponent implements OnInit {
  @Output() onNavigate = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  navigate() {
    this.onNavigate.emit();
  }
}
